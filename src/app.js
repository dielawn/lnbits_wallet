
import {User} from "./User.js"
import { WALLETS } from "./config.js"

const user = new User()
//INITIALIZATION
const initializeUser = async () => {
    user.wallets.length = 0
    //wallets keys saved in config.js include config.js in .gitignore
    const loadWallets = async () => {
        for (let i = 0; i < WALLETS.length; i++) {
            await user.addWallet(WALLETS[i].ID, WALLETS[i].ADMIN_KEY, WALLETS[i].INV_KEY, WALLETS[i].WALLET_NAME)
            await user.wallets[i].initialize()
            }
        }
        await loadWallets() //wallet object to user.wallets
    
    console.log('user:', user)
    console.log(user.wallets.length)
}
await initializeUser()

const displayHeader = async () => {
    const header = document.getElementById('header')
    header.setAttribute('aria-label', 'Total balance')
    header.innerHTML = `${await user.sumBalances()}<span class="icon-Bitcoin-Lightning-Gray-White-Rounded icon-4x"></span>`
}
await displayHeader()

const displayMenuBtns = async () => {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuDiv')

    const menuList = ['Decode Invoice', 'New Wallet', 'Cashu']
    for(let i = 0; i < menuList.length; i++) {
        const menuItem = document.createElement('button')
        menuItem.innerText = menuList[i]
        menuItem.classList.add('menuItem')
        menuItem.id = `menuItem${i}`
        menuDiv.appendChild(menuItem)
    }
    document.getElementById('header').appendChild(menuDiv)
  
}
await displayMenuBtns()

const handleDecode = async () => {   
    const decodeBtn = document.getElementById('menuItem0')
    //initialize the invoice as hidden
    decodeBtn.setAttribute('aria-label', 'Decode Invoice')
    document.getElementById('invoiceDiv').classList.add('hide')   
    decodeBtn.addEventListener('click', async () => {
        //hide the menu  
        document.getElementById('container').classList.toggle('blur')
        await displayInvoice(false)
    })
}
const displayInvoice = async (isPayment, wallet) => {
    const containerDiv = document.querySelector('.container')
    const invoiceDiv = document.getElementById('invoiceDiv')

    containerDiv.classList.add('blur')

    //payment confirm btns
    
    const confirmBtn = document.createElement('button')
    confirmBtn.classList.add('cnfrmBtn')
    confirmBtn.textContent = 'Pay'
    confirmBtn.addEventListener('click', async () => {
        const invoice = await navigator.clipboard.readText()
        await wallet.postPayment(invoice)
        invoiceDiv.innerHTML = ''
        invoiceDiv.classList.replace('flex', 'hide')
        containerDiv.classList.toggle('blur')
        //disable inputs and buttons on the blured page
        await disableBackground()
    })

    invoiceDiv.classList.replace('hide', 'flex')
    invoiceDiv.innerHTML = `${await returnInvoiceTxt()}`
   
    isPayment ?  invoiceDiv.appendChild(confirmBtn) : ''
  
    await setCopyListener()
    
    //disable inputs and buttons on the blured page
    await disableBackground()
    //display invoice div with decoded invoice txt and a close btn
        
   await appendClsBtn('invoiceDiv')
}
await handleDecode()

const disableBackground = async () => {
    //disable inputs and buttons on the blured page
    const containerEls = document.querySelectorAll('.container button, .container input')
    containerEls.forEach(element => {
        element.disabled = document.getElementById('container').classList.contains('blur')
    })
}

const returnInvoiceTxt = async () => {
    //invoice data
    const invoice = await navigator.clipboard.readText()
    console.log(invoice)
    const invoiceData = await user.wallets[0].decodeInvoice(invoice)
    console.log(invoiceData)
    const amount = invoiceData.amount_msat / 1000
    const dateTimeTxt = await handleDateCodes(invoiceData.date)
    const qrCode = await user.wallets[0].getQrCode(invoice)
    //invoice data to txt
    return `<span class="icon-Bitcoin-Lightning-Gray-White-Rounded icon-5x"></span>
    <p>${amount} sats</p> 
    <p>Memo: ${invoiceData.description}</p> 
    <p>${dateTimeTxt[1]}</p>
    <p>${dateTimeTxt[0]}</p>
    <button class="cpyBtn">Copy: ${abrvHash(invoice, 8)}</button>    
    <div class="qrDiv"> ${qrCode}</div>
    <input id="invoiceInput" class="hide" value="${invoice}">`
    
}
const setCopyListener = async () => {
    document.querySelector('.cpyBtn').addEventListener('click', async () => {
        await displaySuccessMsg(await copyToClipBrd(document.getElementById('invoiceInput').value))       
    })
}

const displayWallets = async () => {
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const walletDiv = document.createElement('div')
            walletDiv.classList.add('walletDiv')
            walletDiv.id = `wallet${wallet.wallet_name.substring(0, 3)}`
            walletDiv.innerHTML = `<p aria-label="Wallet name and balance">${wallet.wallet_name}:<br>
            ${wallet.balance} sats</p>` 
            document.getElementById('walletsDiv').appendChild(walletDiv)
        })
    )
}
await displayWallets()


//maybe useful for cashu tokens to check status?
const invoicesTLS = async (invoice) => {
    const invoicesArray = JSON.parse(localStorage.getItem('invoices'))    
    invoicesArray.push(invoice)
    for(let i = 0; i < invoicesArray.length; i++) {        
        localStorage.setItem(`invoice${i}`, JSON.stringify(invoicesArray[i]))
    }
    localStorage.setItem('invoices', JSON.stringify(invoicesArray))
    return invoicesArray
}


// new invoice btn 
const dispCreateInvBtn = async () => {    
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const newInvBtn = document.createElement('button')
            newInvBtn.classList.add('newInvBtn')
            newInvBtn.innerHTML = ` <span class="material-symbols-outlined">arrow_downward</span>`
            newInvBtn.setAttribute('aria-label', 'Create New Invoice')
            newInvBtn.addEventListener('click', async () => {
                console.log('clicked it')
                const amount = await amountIsValid()    
                if(amount === null) {
                    return
                }
                const memoInput = document.getElementById('memoInput')
                const invoice = await wallet.postNewInvoice(amountInput.value, memoInput.value)
                console.log(invoice.payment_request)
                await handleDecode()
                let msg = await copyToClipBrd(invoice.payment_request)
                
                await displaySuccessMsg(msg)
                await displayInvoice(false)
                await clearInputs()
                
                
            })    
            document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(newInvBtn)
            
        })
    )
}
await dispCreateInvBtn()


const amountIsValid = async () => {
    const amountInput = document.getElementById('amountInput') 
    const amount = amountInput.value
    if (amount === '' || isNaN(amount) || amount <= 0) {
        amountInput.classList.add('error')
        
        return null
    } else if (amountInput.classList.contains('error')) {
        amountInput.classList.remove('error')
    }
    return amount
}
const clearInputs = async () => {
    const amountInput = document.getElementById('amountInput') 
    const memoInput = document.getElementById('memoInput')
    amountInput.value = ''
    memoInput.value = ''
}
const displaySuccessMsg = async (msg) => {
    const invoiceBtnsDiv = document.getElementById('invoiceDiv')
    const msgTxtEl = document.createElement('p')
    msgTxtEl.classList.add('msgTxtEl')
    msgTxtEl.innerHTML = msg
    invoiceBtnsDiv.appendChild(msgTxtEl)

    setTimeout(() => {
        msgTxtEl.remove()
    }, 3000)
}
const dispPayInvBtn = async () => {
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const payInvBtn = document.createElement('button')
            payInvBtn.innerHTML = `<span class="material-symbols-outlined">arrow_upward</span>`
            payInvBtn.classList.add('payInvBtn')
            payInvBtn.setAttribute('aria-label', 'Pay Invoice')
            payInvBtn.addEventListener('click', async () => {
                const invoice = await navigator.clipboard.readText()
                const amount = await wallet.returnInvoiceAmount(invoice)
                // await wallet.postPayment(invoice)
                await displayInvoice(true, wallet)
            })
            document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(payInvBtn)
        })
    )
}
await dispPayInvBtn()


const handleDateCodes = async (time) => {
    time = time * 1000
    const fmtdTime = new Date(time).toLocaleTimeString()
    const fmtdDate = new Date(time).toLocaleDateString()
    return [fmtdDate, fmtdTime]
}


// const displayTxHistory = async () => {
//     await Promise.all(
//         user.wallets.map(async (wallet) => {
//             const txEl = document.createElement('div')
//             txEl.classList.add('txEl')
//             const transactions = await wallet.getTxHistory()    
//             await Promise.all(
//                 transactions.map(async (tx) => {                       
//                     const dateTime = await handleDateCodes(tx.time)          
//                     //transaction data to txt   
//                     const txTable = document.createElement('div')
//                     txTable.classList.add('txTable')
//                     txTable.innerHTML = `<p>${wallet.wallet_name}:<br>
//                     ${tx.amount / 1000} sats<br>
//                     Fee: ${tx.fee} mSats<br>
//                     Memo: ${tx.memo}<br>
//                     ${dateTime}</p>`        
//                     txEl.appendChild(txTable)
//                 })
//             ) 
//             document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(txEl)
//         })
//     )
// }
// await displayTxHistory()

const displayTxHistory = async () => {
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const txEl = document.createElement('div')
            txEl.classList.add('txEl')
            const transactions = await wallet.getTxHistory()    
            await Promise.all(
                transactions.map(async (tx) => {                       
                    const dateTime = await handleDateCodes(tx.time)          
                    //transaction data to txt   
                    const txTable = document.createElement('table')
                    txTable.setAttribute('aria-label', 'Transaction') 
                    txTable.classList.add('txTxt')
                    txTable.innerHTML = 
                    `<thead>
                        <tr> <th aria-label="Wallet name">${wallet.wallet_name}:</th> </tr>
                    </thead>
                    <tbody>
                        <tr> <td aria-label="Amount">${tx.amount / 1000} sats</td> </tr>
                        <tr> <td aria-label="Fee">${tx.fee} mSats</td> </tr>
                        <tr> <td aria-label="Memo">${tx.memo}</td> </tr>
                        <tr> <td aria-label="Date">${dateTime[1]}</td> </tr>
                        <tr> <td aria-label="Time">${dateTime[0]}</td> </tr>
                    </tbody>`        
                    txEl.appendChild(txTable)
                })
            ) 
            document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(txEl)
        })
    )
}
await displayTxHistory()

    
//closetBtn for pop ups
const appendClsBtn = async (elIdToRemove) => {

    const toBeRemoved = document.getElementById(elIdToRemove)
    const clsBtn = document.createElement('button')
    clsBtn.classList.add('clsBtn')
    clsBtn.innerHTML = `<span class="material-symbols-outlined" >close</span>`
    clsBtn.addEventListener('click', async () => {
        toBeRemoved.innerHTML = ''
        toBeRemoved.classList.replace('flex', 'hide')
        document.getElementById('container').classList.toggle('blur')
        await disableBackground()
    })
    toBeRemoved.appendChild(clsBtn)

}
//paste invoice btn
const handlePasteInvoice = async (wallet) => {
    const containerDiv = document.getElementById('container')

    const pasteInvoiceBtn = document.createElement('button')
    pasteInvoiceBtn.textContent = 'Paste Invoice'

    //onclick auto paste from clipboard
    const invoice = await navigator.clipboard.readText()
    pasteInvoiceBtn.addEventListener('click', async () => {
        await wallet.postPayment(invoice)
        console.log(await wallet.returnInvoiceAmount(invoice))
    })

    containerDiv.appendChild(pasteInvoiceBtn)

}

//footer
const displayFooter = async () => {
    document.getElementById('footer').innerHTML = `Interface by dielawn, Powered by LNBits <span class="icon-Bitcoin-Lightning-White icon-lg"></span>${await user.getBtcUsdPrice()}`
}

//tools 

const copyToClipBrd = async (text) => {
    if(navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text)
            return 'Copied to clipboard!'
        } catch (error) {
            return 'Unable to copy to clipboard'
        }
    } else {
        return 'Clipboard API not supported'
    }
}

//display shorter hash
const abrvHash = (hash, startEnd) => {
    return `${hash.substring(0, startEnd)}...${hash.substring(hash.length - startEnd, hash.length)}`
 }

 await displayFooter()

const app = async () => {      
    
    setTimeout(() => {app()}, 10000)
}

document.addEventListener('click', async () => {
    // app()  
    
})

