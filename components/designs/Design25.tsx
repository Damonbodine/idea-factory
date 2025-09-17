'use client'
export default function Design25() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-700">
      <div className="container mx-auto px-8 py-16">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-white text-3xl font-bold">NEON/25</div>
          <div className="flex gap-6">
            {['About', 'Work', 'Contact'].map(item => (
              <button key={item} className="px-6 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full hover:bg-white/20 transition-all">
                {item}
              </button>
            ))}
          </div>
        </nav>
        <main className="text-center text-white">
          <h1 className="text-8xl font-bold mb-6">
            Glow<br />Forward
          </h1>
          <p className="text-2xl mb-12 text-pink-200">Radiant Digital Experiences</p>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-white/10 backdrop-blur-lg rounded-lg" />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}