const Web3 = require("web3");

let proxy = '0x9Dd1E8169E76A9226B07Ab9F85CC20a5e1eD44dd'
let gaslessAccount = '0xf2ef385c0914464D339Aea87a85cd31d3fDab418'
let gaslessPrivateKey = '0x04f3787c9e066e8baad82085ff9b8789993219d8582c676e4dc5eb7d21a88850'
let destination = '0x0000000000000000000000000000000000000000'
let value = 0
let data = '0x'
let nonce = 0

async function main() {
  const parts = [
    proxy,
    gaslessAccount,
    destination,
    Web3.utils.toTwosComplement(value),
    data,
    Web3.utils.toTwosComplement(nonce)
  ];
  const message = Web3.utils.soliditySha3(...parts);

  let web3 = new Web3()
  const sig = await web3.eth.accounts.sign(message, gaslessPrivateKey);
  console.log(sig.signature);
}

main()
