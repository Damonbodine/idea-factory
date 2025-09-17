'use client'
export default function Design56() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-blue-950">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold text-purple-400">WEB3.56</div>
          <button className="px-6 py-2 border border-purple-400 text-purple-400 rounded-full">
            Connect Wallet
          </button>
        </header>
        <main className="text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Decentralized Future
          </h1>
          <p className="text-xl text-gray-400 mb-12">Build on the blockchain</p>
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-purple-900/30 border border-purple-500/30 p-6 rounded-lg">
              <div className="text-3xl mb-2">🔗</div>
              <div>Smart Contracts</div>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/30 p-6 rounded-lg">
              <div className="text-3xl mb-2">🪙</div>
              <div>DeFi Solutions</div>
            </div>
            <div className="bg-indigo-900/30 border border-indigo-500/30 p-6 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <div>NFT Marketplace</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}