'use client'
export default function Design70() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold">TRUST BANK</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-blue-400">Personal</a>
            <a href="#" className="hover:text-blue-400">Business</a>
            <a href="#" className="hover:text-blue-400">Wealth</a>
          </nav>
        </header>
        <main>
          <h1 className="text-6xl font-light mb-8">
            Your Financial<br />
            <span className="text-blue-400">Future Secured</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">Banking made simple, secure, and smart</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">2.5%</div>
              <div className="text-sm text-gray-400">Savings APY</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">$0</div>
              <div className="text-sm text-gray-400">Monthly Fees</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">256-bit</div>
              <div className="text-sm text-gray-400">Encryption</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}