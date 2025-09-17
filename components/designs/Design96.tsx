'use client'
export default function Design96() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-blue-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-6xl mb-4">🏄‍♂️</div>
          <h1 className="text-6xl font-bold">WAVE 96</h1>
          <p className="text-2xl">Catch the perfect ride</p>
        </header>
        <main className="text-white">
          <div className="bg-white/20 backdrop-blur rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center">
              SURF&apos;S UP!
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-2">🏄</div>
                <div className="font-bold">Boards</div>
                <div className="text-cyan-200">50+ Models</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🤿</div>
                <div className="font-bold">Wetsuits</div>
                <div className="text-cyan-200">All Sizes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🌊</div>
                <div className="font-bold">Lessons</div>
                <div className="text-cyan-200">Pro Teachers</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}