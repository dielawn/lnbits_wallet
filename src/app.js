
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
    
    document.getElementById('header').innerHTML = `${await user.sumBalances()} <span class="icon-Bitcoin-Lightning-Gray icon-lg"></span>`
}
await displayHeader()

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

// new invoice btn 
const dispCreatetInvBtn = async () => {    
    await Promise.all(
        user.wallets.map(async (wallet) => {
            const newInvBtn = document.createElement('button')
            newInvBtn.classList.add('newInvBtn')
            newInvBtn.innerHTML = ` <span class="material-symbols-outlined">arrow_upward</span>`
    
            newInvBtn.addEventListener('click', async () => {
                console.log('clicked it')
                const amountInput = document.getElementById('amountInput')    
                

                const memoInput = document.getElementById('memoInput')
                const invoice = await wallet.postNewInvoice(amountInput.value, memoInput.value)
                console.log(invoice.payment_request)
                await copyToClipBrd(invoice.payment_request)

            })    
            document.getElementById(`wallet${wallet.wallet_name.substring(0, 3)}`).appendChild(newInvBtn)
        })
    )
}
await dispCreatetInvBtn()

const amountIsValid = async (amount) => {
    if (amount === '' || amount != Number || amount <= 0) {
        return false
    } else
    return true
};

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


const returnInvoiceTxt = async (wallet) => {
        //invoice data
        const invoiceData = await wallet.decodeInvoice(invoice)
        const dateTimeTxt = await handleDateCodes(invoiceData.time)
        const qrCode = await wallet.getQrCode(invoice)
        //invoice data to txt
        const invoiceTxt = 
        `${invoiceData.amount} sats <br>
        ${dateTimeTxt} <br>
        ${qrCode} <br>`
        
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
   await navigator.clipboard.writeText(text)
   .then(() => 'Copied to clipboard!')
   .catch(() => 'Unable to copy to clipboard')
} else return 'Clipboard API not supported'
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

