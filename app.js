const express = require("express");
const bip39 = require("bip39");
const HDWallet = require("ethereum-hdwallet");

var app = express();

app.use(express.static("public"));
app.get("/", function (req, res) {
   res.sendFile(__dirname + "/" + "index.html");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
