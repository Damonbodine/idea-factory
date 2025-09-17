'use client'
export default function Design99() {
  return (
    <div className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-7xl font-mono glitch" data-text="ESCAPE 99">
            ESCAPE 99
          </h1>
          <div className="text-xl text-green-400">60 MINUTES TO FREEDOM</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <div className="border border-green-500 p-8 bg-black/50">
              <h2 className="text-4xl font-mono mb-8 text-center">
                CAN YOU<br />
                <span className="text-red-500 animate-pulse">ESCAPE?</span>
              </h2>
              <div className="grid grid-cols-3 gap-6 font-mono">
                <div className="border border-green-500/50 p-4">
                  <div className="text-2xl mb-2">🔒</div>
                  <div>THE VAULT</div>
                  <div className="text-sm text-green-400">Difficulty: ████░</div>
                </div>
                <div className="border border-green-500/50 p-4">
                  <div className="text-2xl mb-2">🧪</div>
                  <div>MAD SCIENTIST</div>
                  <div className="text-sm text-green-400">Difficulty: █████</div>
                </div>
                <div className="border border-green-500/50 p-4">
                  <div className="text-2xl mb-2">👻</div>
                  <div>HAUNTED</div>
                  <div className="text-sm text-green-400">Difficulty: ███░░</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="text-2xl animate-pulse">PRESS ENTER TO BEGIN</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}