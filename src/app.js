
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
// sum balance of each wallet
const walletsSum = `${await user.sumBalances()}`
console.log('walletSum', walletsSum)

const nameBalanceTxt = await Promise.all(
    user.wallets.map(async (wallet) => {
        //name and balance
        return `${wallet.wallet_name}: ${wallet.balance} sats` 
    })
)
console.log(nameBalanceTxt.join('\n'))


const handleDateCodes = async (time) => {
    time = time * 1000
    const fmtdTime = new Date(time).toLocaleTimeString()
    const fmtdDate = new Date(time).toLocaleDateString()
    return `${fmtdTime} ${fmtdDate}`
}

const returnTxHisoryTxt = await Promise.all(
    user.wallets.map(async (wallet) => {
        //tx history
        const transactions = await wallet.getTxHistory()    
        const txTxt = await Promise.all(
            transactions.map(async (tx) => {       
                const dateTime = await handleDateCodes(tx.time)          
                //transaction data to txt   
                return `${wallet.wallet_name}:
${tx.amount / 1000} sats
Fee: ${tx.fee} mSats
Memo: ${tx.memo}         
${dateTime}`   
                   
            })
        ) 
        return txTxt.join('\n\n')
    })
)
console.log(returnTxHisoryTxt.join('\n\n\n'))


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
//new invoice btn 
const openInvFrmBtn = async (wallet) => {
 
    const infoDiv = document.getElementById(`infoDiv${wallet.wallet_name.substring(0, 3)}`)
    
    const newInvBtn = document.createElement('button')
    newInvBtn.classList.add('newInvBtn')
    newInvBtn.textContent = `Create ${wallet.wallet_name} Invoice`
    newInvBtn.addEventListener('click', async () => {
    //inputs popup: 
    await displayInvoiceInputs()
})    

infoDiv.appendChild(newInvBtn)
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
    const invoice = await pasteFromClipBrd()
    pasteInvoiceBtn.addEventListener('click', async () => {
        await wallet.postPayment(invoice)
        await wallet.decodeInvoice(invoice)
    })

    containerDiv.appendChild(pasteInvoiceBtn)

}

//footer
const displayFooter = async () => {
    // const prevInfo = document.querySelectorAll('.footer')
    // if (prevInfo) {
    //     prevInfo.forEach((el) => {
    //         el.remove()
    //     })        
    // }
    //btc usd price
    const btcUsdPrice = await user.getBtcUsdPrice()
    const footerEl = document.getElementById('footer')
    footerEl.innerHTML = `Interface by dielawn, Powered by LNBits <br> BTC $${btcUsdPrice} usd`

}

//tools 

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
//display shorter hash
const abrvHash = (hash, startEnd) => {
    return `${hash.substring(0, startEnd)}...${hash.substring(hash.length - startEnd, hash.length)}`
 }



const app = async () => {      
    
    setTimeout(() => {app()}, 10000)
}

document.addEventListener('click', async () => {
    // app()  
})

