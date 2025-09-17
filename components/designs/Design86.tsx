'use client'
export default function Design86() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-red-600 transform rotate-45"></div>
              <div className="text-5xl font-bold">SHARP 86</div>
              <div className="w-12 h-12 bg-blue-600 transform rotate-45"></div>
            </div>
            <div className="text-red-400">CLASSIC BARBER SHOP</div>
          </div>
        </header>
        <main>
          <h2 className="text-6xl font-bold text-center mb-12">
            Old School<br />
            <span className="text-red-400">New Cool</span>
          </h2>
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">✂️</div>
              <div>Classic Cut</div>
              <div className="text-red-400 font-bold">$25</div>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">🪒</div>
              <div>Hot Shave</div>
              <div className="text-red-400 font-bold">$30</div>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">🧔</div>
              <div>Beard Trim</div>
              <div className="text-red-400 font-bold">$20</div>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">👑</div>
              <div>Full Service</div>
              <div className="text-red-400 font-bold">$60</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}