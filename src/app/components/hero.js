'use client'
import currentBlockNo  from "./web3/utils"

export default function Hero() {
  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Discover the world with us!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br />Current Block No.: <b>{currentBlockNo()}</b> from QuickNode</p>
          <button className="btn btn-primary">Connect Wallet</button>
        </div>
      </div>
    </div>
  )
}