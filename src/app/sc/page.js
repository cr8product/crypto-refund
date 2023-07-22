import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://linea-goerli.infura.io/v3/45cb05f851444a51bfd995aef63494d9")


//const contract = new ethers.Contract(
//    "0xdf2a89FbEdcf9462b7E10413Ee6eA28e8106937d", 
//    [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balances", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTaxRate", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "greet", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "taxRate", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ],
//    provider
//)

const contr = new ethers.Contract(
    "0x1E2d4f81B3fa74Bae8F65587f91D31C818393cfe",
    [ { "inputs": [ { "internalType": "string", "name": "_greeting", "type": "string" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "greet", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_greeting", "type": "string" } ], "name": "setGreeting", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ],
    provider
)

export default async function getGreeting() {
    console.log(provider)
    const taxPrice = await contr.greet();
    console.log(taxPrice)
    return(<h1>Tax rate: {taxPrice}</h1>)
}
