import {getData} from "./getPost.js"
import {Wallet} from "./Wallet.js"

export class User {
    constructor() {
        this.wallets = []
        this.currentWallet = null
    }
    //add a new key set
    addWallet(id, admKey, invKey, walletName) {
        const wlt = new Wallet()
        wlt.wallet_id = id
        wlt.admin_key = admKey
        wlt.inv_rd_key = invKey
        wlt.wallet_name = walletName

        this.wallets.push(wlt)
    }
    setCurrentWallet = async (i) => this.currentWallet = this.wallets[i];
    sumBalances = async () => {
        let sum = 0
        for (let i = 0; i < this.wallets.length; i++) {
            sum += this.wallets[i].balance
        }
        return sum
    }
    getBtcUsdPrice = async () => {
        let data = await getData(`https://api.coinbase.com/v2/prices/BTC-USD/spot`)
        let json = JSON.parse(data)
        let price = json.data.amount        
        return price
    }
    

}