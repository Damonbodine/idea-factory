'use client'
export default function Design36() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-500 to-cyan-400">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400"
               style={{textShadow: '0 0 40px rgba(255,0,255,0.5)'}}>
            ａｅｓｔｈｅｔｉｃ
          </div>
          <div className="text-2xl text-white mt-4">デザイン • 36</div>
        </header>
        <main className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"></div>
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-gradient-to-br from-cyan-400/30 to-pink-500/30 backdrop-blur-lg border-2 border-pink-500/50"></div>
            ))}
          </div>
          <div className="text-center mt-20">
            <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl">
              リミックス
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}