
import {User} from "./User.js"
import { WALLETS } from "./config.js"

const user = new User()
//INITIALIZATION
const initializeUser = async () => {
    //wallets keys saved in config.js include config.js in .gitignore
    const loadWallets = async () => {
        for (let i = 0; i < WALLETS.length; i++) {
            await user.addWallet(WALLETS[i].ID, WALLETS[i].ADMIN_KEY, WALLETS[i].INV_KEY, WALLETS[i].WALLET_NAME)
            await user.wallets[i].initialize()
    }
}
    //load wallet to user.wallets
    await loadWallets()
    //set first wallet to user.currentWallet as default
    await user.setCurrentWallet(0)
    console.log('user:', user)
}
await initializeUser()
//DATA TO VARIABLES

//balance of selected wallet
const balance = await user.currentWallet.getBalance().then(total => {
    return total
})
console.log('Current wallet balance', balance)

//btc usd price
const btcUsdPrice = await user.getBtcUsdPrice()
console.log('BTC/usd', btcUsdPrice)

//current wallet balance
const wallet = await user.currentWallet.wallet_name
console.log('Current wallet name:', wallet)





// sum balance of each wallet
const displayWalletsSum = async () => {
    const containerDiv = document.getElementById('container')
    const totalDiv = document.createElement('div')

    const totalBalance = await user.sumBalances().then(total => {
        return  total
     })
    user.totalBalance = totalBalance
    
    const balanceEl = document.createElement('h3')
    balanceEl.innerHTML = `Total: ${totalBalance}sats`

    totalDiv.appendChild(balanceEl)

    containerDiv.appendChild(totalDiv)
}


//pseudo DOM stuff

//display balance and name of each wallet
const balanceOfEach = async () => {
        const containerDiv = document.getElementById('container')
        user.wallets.forEach(wallet => {  
            //clickable wallet cards to set wallet keys
            const infoDiv = document.createElement('div')
            infoDiv.addEventListener('click', async () => {
                user.currentWallet = wallet
                await displayTxHistory()
            })
            //wallet names and balances
            const walletInfo = document.createElement('h3') 
            walletInfo.innerHTML =  `${wallet.wallet_name}:<br>${wallet.balance} sasts`  
            
            infoDiv.appendChild(walletInfo) 
            containerDiv.appendChild(infoDiv)
        })        
    }    
    
//display tx history in expandable window 
const displayTxHistory = async () => {
    const containerDiv = document.getElementById('container')
    const transactions = await user.currentWallet.getTxHistory()
    transactions.forEach(async tx => {
        const txDiv = document.createElement('div')
        txDiv.classList.add('txDiv')

            const amountEl = document.createElement('p')
            amountEl.innerHTML = `${tx.amount / 1000}sats`
            
            const feeEl = document.createElement('p')
            feeEl.innerHTML = `Fee: ${tx.fee} mSats`

            const memoEl = document.createElement('p')
            memoEl.innerHTML =  `Memo: ${tx.memo}`
            
            const bolt11El = document.createElement('p')
            const hash =  tx.bolt11
            bolt11El.innerHTML = `${abrvHash(hash, 11)}`
            
            const dateTimeEl = document.createElement('p')   
            dateTimeEl.innerHTML = await handleDateCodes(tx.time)    

            const expiryEl = document.createElement('p')
            expiryEl.innerHTML = await handleDateCodes(tx.expiry)
          
        txDiv.appendChild(amountEl)
        txDiv.appendChild(feeEl)
        txDiv.appendChild(memoEl)
        txDiv.appendChild(bolt11El)
        txDiv.appendChild(dateTimeEl)
        txDiv.appendChild(expiryEl)
        
        containerDiv.appendChild(txDiv)
    })
}
//filter data
//download to csv



//invoice popup:
const displayInvoice = async (invoice) => {

    const prevInvoice = document.querySelectorAll('.invoiceDiv')
    if(prevInvoice){
        prevInvoice.remove()
    }

    const containerDiv = document.getElementById('container')
    const invoiceDiv = document.createElement('div')
    invoiceDiv.id = 'invoiceDiv'
    invoiceDiv.classList.add('invoiceDiv')
    //decodes
    const invoiceData = await user.currentWallet.decodeInvoice(invoice)
    //displays invoice amount
    const amountEl = document.createElement('p')
    amountEl.innerHTML = `${invoiceData.amount}sats`
    //displays invoice creation time
    const dateTimeEl = document.createElement('p')
    dateTimeEl.innerHTML = await handleDateCodes(invoiceData.time)
    //displays unique qr code for air gaped payments
    const qrEl = document.createElement('div')
    qrEl.innerHTML = await user.currentWallet.getQrCode(invoice)

     //options:
        //btn that copies invoice to clipboard for new invoices
        //pay/cancel btns for paste invoice
        //no btns for decoded invoice
    
    await appendClsBtn('invoiceDiv')
    invoiceDiv.appendChild(amountEl)
    invoiceDiv.appendChild(dateTimeEl)
    invoiceDiv.appendChild(qrEl)

    containerDiv.appendChild(invoiceDiv)
} 

//closetBtn for pop ups
const appendClsBtn = async (elIdToRemove) => {

    const toBeRemoved = document.getElementById(elIdToRemove)
    const clsBtn = document.createElement('button')
    clsBtn.classList.add('clsBtn')
    clsBtn.textContent = 'X'
    clsBtn.addEventListener('click', async () => {
        toBeRemoved.remove()
    })
    toBeRemoved.appendChild(clsBtn)

}

//make hash display shorter
const abrvHash = (hash, startEnd) => {
    return `${hash.substring(0, startEnd)}...${hash.substring(hash.length - startEnd, hash.length)}`
 }
 
 const handleDateCodes = async (time) => {
         time = time * 1000
         const fmtdTime = new Date(time).toLocaleTimeString()
         const fmtdDate = new Date(time).toLocaleDateString()
         return `${fmtdTime}<br>${fmtdDate}`
 }
   
const copyToClipBrd = async (text) => {
    if(navigator.clipboard) {
        await navigator.clipboard.writeText(text)
        .then(() => 'Copied to clipboard!')
        .catch(() => 'Unable to copy to clipboard')
    } else return 'Clipboard API not supported'
}

const pasteFromClipBrd = async () => {
    if(navigator.clipboard) {
        await navigator.clipboard.readText()
        .then(() => 'Paste sucessful')
        .catch(() => 'Paste failed')
    } else return 'Clipboard API not supported'
}
//new invoice btn 
const openNewInvBtn = async () => {
    const containerDiv = document.getElementById('container')
    const newInvBtn = document.createElement('button')
    newInvBtn.textContent = 'Create Invoice'
    newInvBtn.addEventListener('click', async () => {
        //inputs popup: 
        await displayInvoiceInputs()
    })    

    containerDiv.appendChild(newInvBtn)
}

const displayInvoiceInputs = async () => {
    const containerDiv = document.getElementById('div')
         
    const newInvoiceDiv = document.createElement('div')
    newInvoiceDiv.id = 'newInvoiceDiv'
    //2 inputs
    //input1 = amount
    const amountInput = document.createElement('input')
    amountInput.placeholder = 'Amount in sats'
    //input2 = memo
    const memoInput = document.createElement('input')
    memoInput.placeholder = 'Memo'
    //submits input data returns invoice
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Create Invoice'

    let invoice =  await user.currentWallet.postNewInvoice(amountInput.value, memoInput.value)
    submitBtn.addEventListener('click', async () => {
        // remove input div
        document.getElementById('newInvoiceDiv').remove()
        //open pay invoice 
        await displayInvoice(invoice)
        //auto copy invoice to clipboard
        await copyToClipBrd(invoice)
    })

    await appendClsBtn("newInvoiceDiv")
    newInvoiceDiv.appendChild(amountInput)
    newInvoiceDiv.appendChild(memoInput)
    newInvoiceDiv.appendChild(submitBtn)

    containerDiv.appendChild(newInvoiceDiv)
}


//paste invoice btn
const handlePasteInvoice = async () => {
    const containerDiv = document.getElementById('container')

    const pasteInvoiceBtn = document.createElement('button')
    pasteInvoiceBtn.textContent = 'Paste Invoice'

    //onclick auto paste from clipboard
    const invoice = await pasteFromClipBrd()
    pasteInvoiceBtn.addEventListener('click', async () => {
        await user.currentWallet.postPayment(invoice)
        await user.currentWallet.decodeInvoice(invoice)
    })

}

//pending??
//on sucessful decode display decoded invoice popup
//on failure display error
//confirmation cancel btns

//decode invoice btn
//displays invoice popup

//new wallet btn
//popup input = wallet name
//submit btn
//close btn


    await balanceOfEach()
    await displayWalletsSum()
    await displayTxHistory()



export {
    user
}