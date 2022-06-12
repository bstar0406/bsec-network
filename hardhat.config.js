require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const mnemonic = "";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    localhost: {
      url: "http://127.0.0.1:7545",
      network_id: "5777"
    },
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/GF_x59vnWpBGjxHj08nYisJexwrpO0h3",
      chainId: 4,
      gasPrice: 20000000000,
      accounts: ["8e8b9989e4b33425bbefbbd6c6d166439ef0f9e7d5a18801a031736db12d2e5e"]
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ["8e8b9989e4b33425bbefbbd6c6d166439ef0f9e7d5a18801a031736db12d2e5e"]
    },
    ethereummainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/ceCjUJUuptARchZNQRB-8Fv-9dMXf4ni/",
      chainId: 1,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    apiKey: "VH2CKUS6SV7VSCR2TFR5YU5PJPU33TQS1X", // Etherscan
  },
};
