
import {getData, postJson}  from "getPost.js"

const PAYMENTS_URL = `https://legend.lnbits.com/api/v1/payments`
const WALLET_URL = `https://legend.lnbits.com/api/v1/wallet`
const QR_CODE_URL = `https://legend.lnbits.com/api/v1/qrcode/`

export class Wallet {
    constructor(id, admKey, invKey, walletName) {
        this.wallet_id = id
        this.admin_key = admKey
        this.inv_rd_key = invKey
        this.wallet_name = walletName
        this.balance = null
    }
    initialize = async () => {
        this.balance = await this.getBalance()
    }   
    getBalance = async () => {
        try {
            let data = await getData(WALLET_URL, this.admin_key)
            let json = JSON.parse(data)   
            //convert mili sats to sats 
            let balance = Number(json.balance) / 1000        
            return balance;
        } catch (error) {
            console.error(`'Error ${this.wallet_name}>getBalance: ${error}`)
        }        
    }
    getTxHistory = async () => {
        try {
            let data = await getData(PAYMENTS_URL, this.admin_key, `application/json`)
            return  JSON.parse(data) 
        } catch (error) {
            console.error(`'Error ${this.wallet_name}>getTxHistory: ${error}`)
        }             
    }
    //returns payable invoice
    postNewInvoice = async (amount, memo) => {
        let json = {
            unit: 'sat',
            amount: Number(amount),
            memo: memo,
            out: false,
            description_hash: ''
        }    
        try {
            const response = await postJson(PAYMENTS_URL, this.admin_key, `application/json`, JSON.stringify(json))
            return  response
        } catch (error) {
            console.error(`Error ${this.wallet_name}>postNewInvoice: ${error}`)
            throw error
        }
    }
    //pays invoice
    postPayment = async (invoice) => {
        let json = {
            out: true,
            bolt11: invoice,
        } 
        try {
            await customAlert(invoice)  
            const response = await postJson(PAYMENTS_URL,  this.admin_key, "application/json", JSON.stringify(json))    
            const paymentHash = response.payment_hash
            console.log(`Payment successful: ${paymentHash}`)
            return paymentHash
        } catch (error) {
            console.error(`Error  ${this.wallet_name}>postPayment: ${error}`)
        }    
    }
    decodeInvoice = async (invoice) => {
        let json = {
            data: invoice
        }
        try {
            const data = await postJson(PAYMENTS_URL, this.inv_rd_key, 'application/json', JSON.stringify(json))
            return data
        } catch (error) {
            console.error(`Error  ${this.wallet_name}>decodeInvoice: ${error}`)
        }
    }
    returnInvoiceAmount = async (invoice) => {
        try {
            const data = await this.decodeInvoice(invoice)
            const amount = (data.amount_msat) / 1000
            return amount
        } catch (error) {
            console.error(`Error  ${this.wallet_name}>returnInvoiceAmount: ${error}`)
        }
    }
    //returns svg file
    getQrCode = async (invoice) => {
        try {
            let data = await getData(`${QR_CODE_URL}${invoice}`)          
            return data
        }catch (error) {
            console.error(`Error  ${this.wallet_name}>getQrCode: ${error}`)
        }
    }
    
    //under construction
    getWalletList = async () => {
        let data = await getData(WALLET_URL, this.admin_key)
        console.log(data)
    }

}


