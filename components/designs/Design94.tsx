'use client'
export default function Design94() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-5xl font-black text-orange-600">REBEL 94</div>
          <nav className="flex gap-8 text-orange-500">
            <a href="#">Bikes</a>
            <a href="#">Parts</a>
            <a href="#">Service</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-black mb-8">
            BORN TO<br />
            <span className="text-orange-600">RIDE</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-12">Freedom on two wheels</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-orange-600/10 border border-orange-600 p-8">
              <div className="text-4xl mb-4">🏍️</div>
              <h3 className="text-xl font-bold mb-2">Cruisers</h3>
              <p className="text-gray-400">Classic American steel</p>
            </div>
            <div className="bg-orange-600/10 border border-orange-600 p-8">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-xl font-bold mb-2">Sport</h3>
              <p className="text-gray-400">Pure performance</p>
            </div>
            <div className="bg-orange-600/10 border border-orange-600 p-8">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Custom</h3>
              <p className="text-gray-400">Build your dream</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}