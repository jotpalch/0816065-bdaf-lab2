const bip39 = require('akachain-bip39')
const HDWallet = require('ethereum-hdwallet')

function vag(_pre = "aa") {
    // var _pre = "aa"
    var _pre_len = _pre.length
    var r = ""
    while(1){
        var _mnemonic = new bip39();
        mnemonic =  _mnemonic.toString() ;
        // var mnemonic = bip39.generateMnemonic()
        // var seed = bip39.mnemonicToSeed(mnemonic);
        // var hdWallet = HDWallet.fromMasterSeed(seed);
        var hdwallet = HDWallet.fromMnemonic(mnemonic);
        var address = hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')
        // console.log(address)
        // console.log(address.substring(0, _pre_len))
        // console.log(_pre)
        if(address.substring(0, _pre_len) === _pre){
            var publick = hdwallet.derive(`m/44'/60'/0'/0/0`).getPublicKey().toString('hex')
            var privatek = hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')
            // console.log("PublicKey: "+publick)
            // console.log("PrivateKey: "+privatek)
            // console.log(mnemonic)
            return { address:address, publick: publick, privatek: privatek, mnemonic: mnemonic };
        }
    }
}

module.exports = {vag: vag}

// console.log(Generator());

// document.querySelector("#mnemonic").innerHTML = "mnemonic";

// export default Generator;