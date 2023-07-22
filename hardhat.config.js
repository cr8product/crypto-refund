/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    linea: {
      url: `https://rpc.goerli.linea.build`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY]
    },
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
      },
  }
};

