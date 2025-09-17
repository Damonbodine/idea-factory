'use client'
export default function Design71() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-6xl mb-4">☀️</div>
          <h1 className="text-4xl font-light">Weather 71</h1>
          <p className="text-sky-100">Your daily forecast companion</p>
        </header>
        <main className="text-white">
          <div className="text-center mb-12">
            <div className="text-8xl font-thin mb-4">72°</div>
            <div className="text-2xl">Sunny</div>
            <div className="text-sky-200">San Francisco, CA</div>
          </div>
          <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
              <div key={day} className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-sm mb-2">{day}</div>
                <div className="text-2xl mb-2">☀️</div>
                <div>72°</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}