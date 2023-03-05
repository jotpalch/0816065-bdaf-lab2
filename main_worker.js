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
        
        var hdwallet = HDWallet.fromMnemonic(mnemonic);
        var address = hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString('hex')
        // console.log(address)

        if(address.substring(0, _pre_len) === _pre){
            var publick = hdwallet.derive(`m/44'/60'/0'/0/0`).getPublicKey().toString('hex')
            var privatek = hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey().toString('hex')
            // console.log("PublicKey: "+publick)
            // console.log("PrivateKey: "+privatek)
            // console.log(mnemonic)
            postMessage( { address:"0x"+address, publicKey: "0x"+publick, privateKey: "0x"+privatek, mnemonic: mnemonic } );
            return { address:"0x"+address, publicKey: "0x"+publick, privateKey: "0x"+privatek, mnemonic: mnemonic } ;
        }
        postMessage("0x"+address);
    }
}

onmessage = function(e) {
    vag(e.data);
}



module.exports = {vag: vag}