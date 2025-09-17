'use client'
export default function Design92() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-500">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <h1 className="text-8xl font-black">SHRED 92</h1>
          <div className="text-2xl">SKATE OR DIE</div>
        </header>
        <main className="text-white">
          <div className="bg-black/20 backdrop-blur rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 text-center">
              RIDE THE<br />STREETS
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🛹</div>
                <div className="font-bold">Decks</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">👟</div>
                <div className="font-bold">Shoes</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🧢</div>
                <div className="font-bold">Gear</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}