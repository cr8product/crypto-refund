/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { PRIVATE_KEY } = process.env;
const {INFURA_KEY} = process.env;


module.exports = {
  solidity: "0.8.18",
  networks: {
    linea: {
      url: `https://rpc.goerli.linea.build`,
      accounts: [PRIVATE_KEY],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
      accounts: [PRIVATE_KEY]
    },
  }
};

