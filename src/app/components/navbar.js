"use client"

import {Web3Button} from "@web3modal/react";
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">

                <a className="btn btn-ghost normal-case text-xl">CryptoRefund</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <Link href="https://3000-cr8product-cryptorefund-gzk8z4q4xiu.ws-eu102.gitpod.io/support" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Support</Link>
                <Link href="https://3000-cr8product-cryptorefund-gzk8z4q4xiu.ws-eu102.gitpod.io/purchase" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">My Shopping</Link>
                    
                    <Web3Button>Connect Wallet</Web3Button>
                </ul>
            </div>

        </div>
    )
}
