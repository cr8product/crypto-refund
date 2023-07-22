"use client"

import {Web3Button} from "@web3modal/react";


export default function Navbar2(props) {
    return (
        <div>
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">{props.title}</a>
            </div>
        <div className="absolute top-3 right-0">
            <Web3Button>Connect Wallet</Web3Button>
    </div>
    </div>
    
    )
}