const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')


function Generator(_pre = "aa") {
    // var _pre = "aa"
    var _pre_len = _pre.length

    while(1){
        var mnemonic = bip39.generateMnemonic()
        // var seed = bip39.mnemonicToSeed(mnemonic);
        // var hdWallet = HDWallet.fromMasterSeed(seed);
        var hdwallet = HDWallet.fromMnemonic(mnemonic);
        var address = hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')
        console.log(address)
        // console.log(address.substring(0, _pre_len))
        // console.log(_pre)
        if(address.substring(0, _pre_len) === _pre){
            var publick = hdwallet.derive(`m/44'/60'/0'/0/0`).getPublicKey().toString('hex')
            var privatek = hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')
            console.log("PublicKey: "+publick)
            console.log("PrivateKey: "+privatek)
            console.log(mnemonic)
            return mnemonic;
        }
        // document.querySelector("#mnemonic").innerHTML = mnemonic;
    }
}

Generator();
// console.log(Generator());
// document.querySelector("#mnemonic").innerHTML = "mnemonic";

// export default Generator;