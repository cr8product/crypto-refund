"use client"

import {Web3Button} from "@web3modal/react";


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">CryptoRefund</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <a className="btn btn-blue">Contact us</a>
                    <Web3Button>Connect Wallet</Web3Button>
                </ul>
            </div>

        </div>
    )
}
