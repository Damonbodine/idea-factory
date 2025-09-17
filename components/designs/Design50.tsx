'use client'
export default function Design50() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-white">
            <div className="text-2xl mb-4">🎉 FINALE 🎉</div>
            <h1 className="text-8xl font-bold mb-4">50</h1>
            <div className="text-3xl">Design Complete!</div>
          </div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg p-12 rounded-3xl text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Mission Accomplished</h2>
              <p className="text-xl mb-8">
                50 unique designs, infinite possibilities
              </p>
              <div className="grid grid-cols-5 gap-2 mb-8">
                {Array.from({length: 50}).map((_, i) => (
                  <div key={i} className="w-full h-12 bg-white/30 rounded flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                ))}
              </div>
              <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform">
                CHOOSE YOUR FAVORITE
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}