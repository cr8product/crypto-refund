'use client'
import { ethers } from "ethers";
import contractArtifact from "../../../artifacts/contracts/Greeter.sol/Greeter.json"
import React from "react";

export default function smartContractInteractions() {
    const deployedContract = "0x085E82226a3709105883aA0fa2680279Db13B46f";
    const provider = new ethers.JsonRpcProvider(`https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`)
    
    const readContract = new ethers.Contract(deployedContract, contractArtifact.abi, provider);
    const signer = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
    const writeContract = new ethers.Contract(deployedContract, contractArtifact.abi, signer);

    const [value, setValue] = React.useState("empty")
    
    async function retrieveTx() {
        const greeting = await readContract.greeting();
        setValue(greeting);
    }
        
    async function submitTx() {
        const tx = await writeContract.setGreeting("This is 6");
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