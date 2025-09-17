'use client'
export default function Design62() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-5xl mb-2">✈️</div>
          <h1 className="text-4xl font-bold">WanderLust 62</h1>
          <p className="text-blue-100">Your journey begins here</p>
        </header>
        <main className="text-white">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-4">Explore The World</h2>
            <p className="text-xl text-blue-100">Unforgettable adventures await</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🏖️</div>
              <div className="font-bold">Beaches</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🏔️</div>
              <div className="font-bold">Mountains</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🏛️</div>
              <div className="font-bold">Cities</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}