'use client'
export default function Design34() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="text-6xl mb-4 text-yellow-400" style={{textShadow: '4px 4px 0px #ff00ff'}}>
              ARCADE
            </div>
            <div className="text-xl text-cyan-400">INSERT COIN TO CONTINUE</div>
          </div>
        </header>
        <main className="max-w-4xl mx-auto">
          <div className="border-4 border-yellow-400 p-8">
            <div className="text-center mb-8">
              <div className="text-3xl mb-4">HIGH SCORE</div>
              <div className="text-5xl text-yellow-400">999999</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <button className="bg-red-600 p-4 text-2xl">PLAYER 1</button>
              <button className="bg-blue-600 p-4 text-2xl">PLAYER 2</button>
            </div>
          </div>
          <div className="text-center mt-8 animate-pulse">
            <div className="text-cyan-400">PRESS START</div>
          </div>
        </main>
      </div>
    </div>
  )
}