

export default function Hero() {
  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Shop with crypto refund whereever you want!</h1>
          <p className="py-6">No need to share your identity details with others. Decentralized approach to taxfree shopping. </p>
          <button className="btn btn-primary">Connect Wallet</button>
        </div>
      </div>
    </div>
  )
}