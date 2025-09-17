'use client'
export default function Design74() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16 relative">
        <div className="absolute inset-0 opacity-50">
          {Array.from({length: 50}).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: 'twinkle 3s infinite'
              }}
            />
          ))}
        </div>
        <header className="relative z-10 text-center mb-20">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-bold">COSMOS 74</h1>
          <p className="text-gray-400">Explore the infinite</p>
        </header>
        <main className="relative z-10 text-center">
          <h2 className="text-6xl font-light mb-8">
            Journey to the<br />
            <span className="text-purple-400">Stars</span>
          </h2>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl mb-2">🌍</div>
              <div>Earth</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🌙</div>
              <div>Moon</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🪐</div>
              <div>Mars</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}