
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
    
    document.getElementById('header').innerHTML = `${await user.sumBalances()} 
    <span class="icon-Bitcoin-Lightning-Gray icon-lg"></span><span class="material-symbols-outlined menuIcon">
    menu
    </span>`
}
await displayHeader()

const openClsMenu = async () => {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuDiv')

    const menuList = ['Decode', 'New Wallet', 'Cashu']
    for(let i = 0; i < menuList.length; i++) {
        const menuItem = document.createElement('p')
        menuItem.innerText = menuList[i]
        menuItem.classList.add('menuItem')
        menuItem.id = `menuItem${i}`
        menuDiv.appendChild(menuItem)
    }
    document.getElementById('header').appendChild(menuDiv)
    menuDiv.classList.toggle('hide')
    document.querySelector('.menuIcon').addEventListener('click', async () => {
        menuDiv.classList.toggle('hide')
    })
}
await openClsMenu()

const handleDecode = async () => {
    const invoiceDiv = document.getElementById('invoiceDiv')
    invoiceDiv.classList.toggle('hide')
    

    const decodeBtn = document.getElementById('menuItem0')
    decodeBtn.addEventListener('click', async () => {
        document.querySelector('.menuDiv').classList.toggle('hide')
        document.getElementById('container').classList.toggle('blur')
        console.log('clicked decode')
        invoiceDiv.classList.replace('hide', 'flex')
        invoiceDiv.innerHTML = `${await returnInvoiceTxt()}`
        await appendClsBtn('invoiceDiv')
    })
}
await handleDecode()

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
    <p>${invoiceData.description}</p> 
    <p>${dateTimeTxt}</p>
    <div> ${qrCode}</div>`
    
}

const displayWallets = async () => {
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const walletDiv = document.createElement('p')
            walletDiv.classList.add('walletDiv')
            walletDiv.id = `wallet${wallet.wallet_name.substring(0, 3)}`
            walletDiv.innerHTML = `${wallet.wallet_name}:<br>${wallet.balance} sats` 
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
const dispCreatetInvBtn = async () => {    
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const newInvBtn = document.createElement('button')
            newInvBtn.classList.add('newInvBtn')
            newInvBtn.innerHTML = ` <span class="material-symbols-outlined">arrow_downward</span>`
    
            newInvBtn.addEventListener('click', async () => {
                console.log('clicked it')
                const amount = await amountIsValid()    
                if(amount === null) {
                    return
                }
                const memoInput = document.getElementById('memoInput')
                const invoice = await wallet.postNewInvoice(amountInput.value, memoInput.value)
                console.log(invoice.payment_request)
                let msg = await copyToClipBrd(invoice.payment_request)
                
                await displaySuccessMsg(msg)
                await clearInputs()
            })    
            document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(newInvBtn)
        })
    )
}
await dispCreatetInvBtn()

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
    const invoiceBtnsDiv = document.getElementById('invoiceBtnsDiv')
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
            payInvBtn.addEventListener('click', async () => {
                const invoice = await navigator.clipboard.readText()
                const amount = await wallet.returnInvoiceAmount(invoice)
                await wallet.postPayment(invoice)
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
    return `${fmtdTime}<br>${fmtdDate}`
}

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
                    const txTxt = document.createElement('p')
                    txTxt.classList.add('txTxt')
                    txTxt.innerHTML = `${wallet.wallet_name}:<br>${tx.amount / 1000} sats<br>Fee: ${tx.fee} mSats<br>Memo: ${tx.memo}<br>${dateTime}`        
                    txEl.appendChild(txTxt)
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
    clsBtn.textContent = 'X'
    clsBtn.addEventListener('click', async () => {
        toBeRemoved.innerHTML = ''
        toBeRemoved.classList.replace('flex', 'hide')
        document.getElementById('container').classList.toggle('blur')
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
    document.getElementById('footer').innerHTML = `Interface by dielawn, Powered by LNBits <br> <span class="icon-Bitcoin-Lightning-White icon-lg"></span>${await user.getBtcUsdPrice()}`
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

