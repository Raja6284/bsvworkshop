import NeucronSDK from "neucron-sdk";

const neucron = new NeucronSDK();

const authModule = neucron.authentication;
const walletModule = neucron.wallet;

// const signUpResponse = await authModule.signUp({ email: "rajaraja360parth@gmail.com", password: "7903301305But@" });
// console.log(signUpResponse);

const loginResponse = await authModule.login({ email: "rajaraja360parth@gmail.com", password: "7903301305But@" });
console.log(loginResponse);

// const walletKeys = await walletModule.getWalletKeys({});
// console.log(walletKeys);


// For Default wallet balance
const DefaultWalletBalance = await walletModule.getWalletBalance({});
console.log(DefaultWalletBalance);

// const addresses = await walletModule.getAddressesByWalletId({});
// console.log(addresses);

// const options = {
//     outputs: [
//       {
//         address: 'nehagc845@dev.neucron.io',
//         note: 'gurudakshina',
//         amount:2
//       }
//     ]
//   };


// const payResponse = await neucron.pay.txSpend(options)
// console.log(payResponse)

// const walletHistory = await walletModule.getWalletHistory({ });
// console.log(walletHistory);


// console.log('initiating wallet')
// const walletCreation1 = await walletModule.createWallet({ walletName: 'raja' });
// console.log(walletCreation1);

// const walletBalance = await walletModule.getWalletBalance({ walletId: walletCreation1.walletID });
// console.log(walletBalance);

// const addresses = await walletModule.getAddressesByWalletId({ walletId: walletCreation1.walletID });
// console.log(addresses);

// const mnemonic = await walletModule.getMnemonic({ walletId: walletCreation1.walletID });
// console.log(mnemonic);

// const allUtxos = await walletModule.getAllUtxos({ walletId: walletCreation1.walletID });
// console.log(allUtxos);

// const xPubKeys = await walletModule.getXPubKeys({ walletId: walletCreation1.walletID });
// console.log(xPubKeys);