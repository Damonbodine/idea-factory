'use client'
export default function Design78() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="text-4xl">🦷</div>
            <div className="text-2xl font-semibold text-blue-600">SmileCare 78</div>
          </div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-700">Services</a>
            <a href="#" className="text-gray-700">Team</a>
            <a href="#" className="text-gray-700">Contact</a>
          </nav>
        </header>
        <main>
          <h1 className="text-5xl font-light text-gray-900 mb-6">
            Your Smile,<br />
            <span className="text-blue-600 font-semibold">Our Priority</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">Modern dentistry with a gentle touch</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🪥</div>
              <div className="font-semibold">Cleaning</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-semibold">Whitening</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-semibold">Repair</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">😊</div>
              <div className="font-semibold">Cosmetic</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}