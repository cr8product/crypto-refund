'use client'
import { ethers } from "ethers";
import contractArtifact from "../../../artifacts/contracts/Greeter.sol/Greeter.json"
import React from "react";

export default function smartContractInteractions() {
    const INFURA_KEY = "45cb05f851444a51bfd995aef63494d9";
    const PRIVATE_KEY = "9e7205b9cb030435e225ada16e30144e7ddc638da10f063e83230b97d4191eda";

    const deployedContract = "0x085E82226a3709105883aA0fa2680279Db13B46f";
    const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_KEY}`)
    
    const readContract = new ethers.Contract(deployedContract, contractArtifact.abi, provider);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const writeContract = new ethers.Contract(deployedContract, contractArtifact.abi, signer);

    const [value, setValue] = React.useState("empty")
    
    async function retrieveTx() {
        const greeting = await readContract.greeting();
        setValue(greeting);
    }
        
    async function submitTx() {
        const tx = await writeContract.setGreeting("This is 9");
        alert("Transaction submitted: ", tx.hash);
    }
        
    return(
    <div>
        <h1>Tax rate: {value}</h1>
        <button className="btn" onClick={retrieveTx}>Retrieve</button>
        <button className="btn btn-warning" onClick={submitTx}>Submit</button>
    </div>
    )
}