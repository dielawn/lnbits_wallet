
import {User} from "./User.js"
import { WALLETS } from "./config.js"

console.log(WALLETS)

const user = new User()

//wallets keys saved in config.js include config.js in .gitignore
const loadWallets = async () => {
    for (let i = 0; i < WALLETS.length; i++) {
        await user.addWallet(WALLETS[i].ID, WALLETS[i].ADMIN_KEY, WALLETS[i].INV_KEY, WALLETS[i].WALLET_NAME)
        await user.wallets[i].initialize()
   }
}


//load wallet to user.wallets
await loadWallets()

//set default
await user.setCurrentWallet(0)

//ballance of selected wallet
const balance = await user.currentWallet.getBalance().then(total => {
    return total
})
console.log('balance', balance)

//btc usd price
const btcUsdPrice = await user.getBtcUsdPrice()

const wallet = await user.currentWallet.wallet_name
const sumBalances = await user.sumBalances().then(balance => {
    return balance
})

console.log('user:', user)


user.sumBalances().then(total => {
    console.log('Total', total)
})

console.log(`${wallet}:${balance} BTC/usd$${btcUsdPrice} Total: $${sumBalances}`)