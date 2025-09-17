'use client'
export default function Design65() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-black text-cyan-400">GAMEZON</div>
          <div className="flex gap-6 text-cyan-300">
            <a href="#">Store</a>
            <a href="#">Library</a>
            <a href="#">Community</a>
          </div>
        </header>
        <main className="text-center">
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
            LEVEL UP
          </h1>
          <p className="text-2xl text-gray-300 mb-12">Join millions of players worldwide</p>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-purple-800/50 backdrop-blur border border-purple-500/50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🎮</div>
              <div className="text-xl font-bold">10K+ Games</div>
            </div>
            <div className="bg-blue-800/50 backdrop-blur border border-blue-500/50 p-8 rounded-lg">
              <div className="text-5xl mb-4">👥</div>
              <div className="text-xl font-bold">5M+ Players</div>
            </div>
            <div className="bg-pink-800/50 backdrop-blur border border-pink-500/50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🏆</div>
              <div className="text-xl font-bold">Daily Tournaments</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}