const {argv}  = require("node:process");
const bip39 = require("bip39");
const HDWallet = require("ethereum-hdwallet");

function vag(_pre = "aa") {
  // var _pre = "aa"
  var _pre_len = _pre.length;
  var r = "";
  while (1) {
    // var _mnemonic = new bip39();
    // mnemonic =  _mnemonic.toString() ;
    var mnemonic = bip39.generateMnemonic();
    // var seed = bip39.mnemonicToSeed(mnemonic);
    // var hdWallet = HDWallet.fromMasterSeed(seed);
    var hdwallet = HDWallet.fromMnemonic(mnemonic);
    var address = hdwallet
      .derive(`m/44'/60'/0'/0/0`)
      .getAddress()
      .toString("hex");
    console.log("0x"+address)
    // console.log(address.substring(0, _pre_len))
    // console.log(_pre)
    if (address.substring(0, _pre_len) === _pre) {
      var publick = hdwallet
        .derive(`m/44'/60'/0'/0/0`)
        .getPublicKey()
        .toString("hex");
      var privatek = hdwallet
        .derive(`m/44'/60'/0'/0/0`)
        .getPrivateKey()
        .toString("hex");
      // console.log("PublicKey: "+publick)
      // console.log("PrivateKey: "+privatek)
      // console.log(mnemonic)
      return {
        address: "0x" + address,
        publick: "0x" + publick,
        privatek: "0x" + privatek,
        mnemonic: mnemonic,
      };
    }
  }
}

if (argv[2] == "undefined"){
    console.log("Prefix not found.");
}
else{
    console.log(vag(argv[2]));
}
