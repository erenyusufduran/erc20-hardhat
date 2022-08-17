require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

// const MAINNET_RPC_URL =
//   process.env.MAINNET_RPC_URL ||
//   process.env.ALCHEMY_MAINNET_RPC_URL ||
//   "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
// const RINKEBY_RPC_URL =
//   process.env.RINKEBY_RPC_URL ||
//   "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
// const KOVAN_RPC_URL =
//   process.env.KOVAN_RPC_URL || "https://eth-kovan.alchemyapi.io/v2/your-api-key"
// const POLYGON_MAINNET_RPC_URL =
//   process.env.POLYGON_MAINNET_RPC_URL ||
//   "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
// // optional
// const MNEMONIC = process.env.MNEMONIC || "your mnemonic"

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 4,
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  mocha: {
    timeout: 2000000, // 200 seconds max for running tests
  },
};
