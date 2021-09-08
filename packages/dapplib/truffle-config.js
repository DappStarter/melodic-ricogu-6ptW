require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note situate cluster hunt desert equal gift'; 
let testAccounts = [
"0xa4a3aa1ab660bc97a461e7c2bda08ebe2cbbad26ae228ed3b2a368043bf645ae",
"0x5f0a57db9ddf526120d30ee4dc44ef49f46d0d7077827845d74f7a8b72ddd960",
"0xbcc7d0fd6241304fecbd2bb7cb3ce149d3b6b0c25bc1f8ca5d08f78dce561671",
"0xd30539bd31ca76d71e7193cc6380ded41ebd6d7af0ae4de57e3f0ef0c7609b78",
"0x02726826235c61ad562c0b1a841fa3a788f4292a46bef4e6b1ba7a39ee77445c",
"0x50aff678e225032d9e03ae278a1e6384e77a14c4af5cba00c33ace41c4f8afc2",
"0x1d4043bef54af570ef69e0aa997f8641f52bfb24d27d2b63bbd3edba4e98321f",
"0x1ec8f6ad71ca44b101f22f6e4776cb8d67f968538e0c9823df4cde55164d4dc2",
"0x618b57df31440ae166ba5c9d5e9af062e396bcd2d8ace6c61eaffdf86523aafd",
"0x477561467efb6f6c3a8ec6c82a43543abf9369f2732984ac1c278194920306b7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

