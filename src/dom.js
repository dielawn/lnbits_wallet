// import { user } from "./app"
// import {User} from "./User.js"
// import { WALLETS } from "./config.js"

// //DATA TO VARIABLES

// //ballance of selected wallet
// const balance = await user.currentWallet.getBalance().then(total => {
//     return total
// })
// console.log('Current wallet balance', balance)

// //btc usd price
// const btcUsdPrice = await user.getBtcUsdPrice()
// console.log('BTC/usd$', btcUsdPrice)

// //current wallet balance
// const wallet = await user.currentWallet.wallet_name
// console.log('Current wallet name:', wallet)

// // returns the balance of each wallet loaded to user
// const balanceOfEach = async () => {
//     const ballanceArray = []
//     user.wallets.forEach(wallet => {
//         const nameBalance =  `${wallet.wallet_name}: ${wallet.balance} sasts`
//         ballanceArray.push(nameBalance)         
//     })
//     return ballanceArray
// }
// const nameBalance = await balanceOfEach()
// for(let i = 0; i < nameBalance.length; i++) {
//     console.log(nameBalance[i])
// }

// // sum balance of each wallet
// const totalBalance = await user.sumBalances().then(total => {
//     return  total
//  })
//  console.log('Total:', totalBalance)



// const appendDom = async () => {
//     const containerDiv = document.getElementById('container')
//     const textEL = document.createElement('p')

  
//     textEL.innerHTML = wallet
//     console.log(user)
//     containerDiv.appendChild(textEL)
// }
// export {
//     appendDom
// }