
import {User} from "./User.js"
import { WALLETS } from "./config.js"

console.log(WALLETS)

const user = new User()

//wallets keys saved in config.js include config.js in .gitignore
const loadWallets = async () => {
    WALLETS.forEach(wallet => {
        user.addWallet(WALLETS.ID, WALLETS.ADMIN_KEY, WALLETS.INV_KEY, WALLETS.WALLET_NAME)
    })
}

//load wallet to user.wallets
loadWallets()

//set default
user.setCurrentWallet(0)

//ballance of selected wallet
const balance = await user.currentWallet.getBalance()
const btcUsdPrice = await user.getBtcUsdPrice()
const wallet = await user.currentWallet.wallet_name
const sumBalances = await user.sumBalances()

console.log(`user: ${user.currentWallet.wallet_name}`)

console.log(`${wallet}: ${balance}sats, BTC/usd$${btcUsdPrice} Total: $${sumBalances}`)