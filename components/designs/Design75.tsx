'use client'
export default function Design75() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-pink-200 to-blue-200">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black text-purple-600">
            FUN ZONE 75
          </h1>
          <div className="text-2xl text-pink-600">Where kids play & learn!</div>
        </header>
        <main>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-400 rounded-3xl p-8 text-white text-center transform rotate-2">
              <div className="text-5xl mb-2">🎨</div>
              <div className="font-bold">ART</div>
            </div>
            <div className="bg-blue-400 rounded-3xl p-8 text-white text-center transform -rotate-2">
              <div className="text-5xl mb-2">🎮</div>
              <div className="font-bold">GAMES</div>
            </div>
            <div className="bg-green-400 rounded-3xl p-8 text-white text-center transform rotate-3">
              <div className="text-5xl mb-2">📚</div>
              <div className="font-bold">STORIES</div>
            </div>
            <div className="bg-purple-400 rounded-3xl p-8 text-white text-center transform -rotate-1">
              <div className="text-5xl mb-2">🎵</div>
              <div className="font-bold">MUSIC</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-rainbow-gradient text-white px-12 py-6 rounded-full text-2xl font-bold animate-bounce">
              START PLAYING!
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}