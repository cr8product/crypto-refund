'use client'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import {mainnet, polygon} from 'wagmi/chains'
 
import { publicProvider } from 'wagmi/providers/public'
import { infuraProvider } from 'wagmi/providers/infura'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
 
// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient } = configureChains(
  [mainnet],
  [infuraProvider({apiKey: process.env.NEXT_PUBLIC_INFURA_KEY})],
)
 
// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
})
 
// Pass config to React Context Provider
export default function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  )
}


import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'
   
  export function Profile() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()
   
    if (isConnected) {
      return (
        <div>
          <img src={ensAvatar} alt="ENS Avatar" />
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <div>Connected to {connector.name}</div>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )
    }
   
    return (
      <div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}
   
        {error && <div>{error.message}</div>}
      </div>
    )
  }