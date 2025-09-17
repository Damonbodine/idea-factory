'use client'
export default function Design89() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🧘‍♀️</div>
          <h1 className="text-5xl font-light text-purple-800">Namaste 89</h1>
          <p className="text-purple-600">Mind • Body • Spirit</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Find Your<br />
              <span className="text-purple-600 font-semibold">Inner Peace</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-2">Morning Flow</h3>
              <p className="text-gray-600">6:00 AM</p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Evening Restore</h3>
              <p className="text-gray-600">7:00 PM</p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">Power Yoga</h3>
              <p className="text-gray-600">12:00 PM</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}