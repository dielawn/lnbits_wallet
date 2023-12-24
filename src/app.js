
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
console.log('BTC/usd$', btcUsdPrice)

//current wallet balance
const wallet = await user.currentWallet.wallet_name
console.log('Current wallet name:', wallet)



// sum balance of each wallet
const totalBalance = await user.sumBalances().then(total => {
    return  total
 })
user.totalBalance = totalBalance
console.log(user.totalBalance)

//pseudo DOM stuff

 


    const balanceOfEach = async () => {
        const containerDiv = document.getElementById('container')
        user.wallets.forEach(wallet => {  
            //clickable wallet cards to set wallet keys
            const infoDiv = document.createElement('div')
            infoDiv.addEventListener('click', async () => {
                user.currentWallet = wallet
            })
            //wallet names and balances
            const walletInfo = document.createElement('h3') 
            walletInfo.innerHTML =  `${wallet.wallet_name}:<br>${wallet.balance} sasts`  
            
            infoDiv.appendChild(walletInfo) 
            containerDiv.appendChild(infoDiv)
            
        })        
    }
    await balanceOfEach()


//display tx history in expandable window 
//download to csv

//invoice popup: 
//decodes
//displays amount, date, time, qrcode, 
//closetBtn
    //options:
        //btn that copies invoice to clipboard for new invoices
        //pay/cancel btns for paste invoice
        //no btns for decoded invoice

//new invoice btn onclick  
//input popup: 
//2 inputs input1 = amount, input2 = memo, 
//submit new invoice btn,
//onclick auto copy returned invoice to clipboard, 
//hide input popup, 

//paste invoice btn
//onclick auto paste from clipboard
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
export {
    user
}