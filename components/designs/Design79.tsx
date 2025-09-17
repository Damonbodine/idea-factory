'use client'
export default function Design79() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-bold text-red-600">VELOCITY 79</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-red-600">Models</a>
            <a href="#" className="hover:text-red-600">Configure</a>
            <a href="#" className="hover:text-red-600">Test Drive</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-black mb-8">
            PURE<br />
            <span className="text-red-600">PERFORMANCE</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">0-60 in 2.8 seconds</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">450HP</div>
              <div className="text-gray-500">Horsepower</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">200MPH</div>
              <div className="text-gray-500">Top Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">V8</div>
              <div className="text-gray-500">Engine</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}