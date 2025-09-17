'use client'
export default function Design100() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-400 via-purple-600 to-blue-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-4xl mb-4">⭐ THE ULTIMATE ⭐</div>
          <h1 className="text-9xl font-black">100</h1>
          <div className="text-3xl">DESIGN COLLECTION COMPLETE</div>
        </header>
        <main className="text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-center mb-12">
              A Century of<br />
              <span className="text-gold-300">Creative Excellence</span>
            </h2>
            <div className="grid grid-cols-10 gap-2 mb-12">
              {Array.from({length: 100}).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/20 backdrop-blur rounded flex items-center justify-center text-xs font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-white text-purple-600 px-16 py-6 rounded-full text-2xl font-black hover:scale-110 transition-transform">
                VIEW THE COLLECTION
              </button>
            </div>
            <div className="text-center mt-12 text-2xl">
              🎉 Thank you for exploring all 100 designs! 🎉
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}