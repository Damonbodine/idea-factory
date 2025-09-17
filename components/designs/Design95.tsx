'use client'
export default function Design95() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-6xl mb-4">🕉️</div>
          <h1 className="text-5xl font-light">Mindful 95</h1>
          <p className="text-purple-200">Your journey to inner peace</p>
        </header>
        <main className="text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">
              Breathe.<br />
              Relax.<br />
              <span className="text-purple-300">Transform.</span>
            </h2>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-12">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-full p-4">5 min Morning Meditation</div>
                <div className="bg-white/10 rounded-full p-4">10 min Stress Relief</div>
                <div className="bg-white/10 rounded-full p-4">20 min Deep Sleep</div>
              </div>
              <button className="mt-8 bg-purple-600 px-8 py-4 rounded-full">
                Start Session
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}