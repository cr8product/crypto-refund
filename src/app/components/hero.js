

export default function Hero() {
  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://img.freepik.com/free-vector/buying-tickets-online-abstract-concept-illustration_335657-2229.jpg?w=900&t=st=1689968568~exp=1689969168~hmac=ead463284c6aa42cb8c7bf2c123a20f7756dc45ba6b7dfbbf3b526cf287a3dac" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Shop with crypto refund whereever you want!</h1>
          <p className="py-6">No need to share your identity details with others. Decentralized approach to taxfree shopping. </p>
          <button className="btn btn-primary">Connect Wallet</button>
        </div>
      </div>
    </div>
  )
}