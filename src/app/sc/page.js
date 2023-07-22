import { ethers } from "ethers";
import contractArtifact from "../../../artifacts/contracts/Greeter.sol/Greeter.json"

const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/45cb05f851444a51bfd995aef63494d9")

const contr = new ethers.Contract(
    "0x8Bbdb6e1d9D1dFf0c24155e21035c6BFb7bc2918",
    contractArtifact.abi,
    provider
)

export default async function getGreeting() {
    console.log(provider)
    const taxPrice = await contr.greet();
    console.log(taxPrice)
    return(<h1>Tax rate: {taxPrice}</h1>)
}
