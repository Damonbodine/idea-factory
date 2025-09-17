'use client'
export default function Design53() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-indigo-900">
      <div className="container mx-auto px-8 py-16 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/50 to-transparent"></div>
        </div>
        <header className="relative z-10 text-center mb-20">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            RETRO WAVE
          </h1>
          <div className="text-pink-300">1985 DIGITAL DREAMS</div>
        </header>
        <main className="relative z-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="h-64 bg-gradient-to-b from-pink-500/20 to-cyan-500/20 border-2 border-cyan-500"></div>
            <div className="h-64 bg-gradient-to-b from-pink-500/20 to-cyan-500/20 border-2 border-pink-500"></div>
            <div className="h-64 bg-gradient-to-b from-pink-500/20 to-cyan-500/20 border-2 border-purple-500"></div>
          </div>
        </main>
      </div>
    </div>
  )
}