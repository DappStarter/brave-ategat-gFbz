require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stock riot night umbrella injury light army general'; 
let testAccounts = [
"0x20ff0b021499b33d7f785accf994f9254dd50d92b2a81fae70ef953c5f44358f",
"0x20c76ad1ae34e8daca1f61ad9316796a8ef7875504e366ab27bb234241f9101c",
"0xd472b427a45f4202b3d555b289f367d555372370cd6e7fe41bb2b10ac9963fd4",
"0xeced6d89f0347a3c9f982e384df22920fa7d883a5ecff277e83026c3ef9f9d0b",
"0xf1df78a7264820603512e6b8e4a6eeaa842d83cb819a6e0c72a1d7c01f396189",
"0x2f039021c2d0e57fbb7a4be67c45341a2ef6b109cce4d691c6e4f4cd9a018b33",
"0x7f3e5fabebd4074fd33d5964a56f5a47df6c9102cab1fc1c87480102a97115d1",
"0xcbb5b551b262f6c9357c23811cad024de49355bfc737632507d9e2c3a2c8f7c4",
"0x5d8638e750397dc4680cf368c410f7e92503f20d23312ce02a175bd2284cf1cc",
"0x7bf1970bef4a2028dfbf507ce12053093f7b67e1a05084d2033960d8bc72ce45"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


