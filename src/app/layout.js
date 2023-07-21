"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import {arbitrum, polygon} from "viem/chains";
import {configureChains, createConfig, mainnet, WagmiConfig} from "wagmi";
import {EthereumClient, w3mConnectors, w3mProvider} from "@web3modal/ethereum";
import {Web3Modal} from "@web3modal/react";

const inter = Inter({ subsets: ['latin'] })


const chains = [arbitrum, mainnet, polygon]
const projectId = 'cf030dd6bb7dd80c8d8521638bbd2192'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}></Web3Modal>
        <WagmiConfig config={wagmiConfig}>
          {children}
        </WagmiConfig>
      </body>
    </html>
  )
}
