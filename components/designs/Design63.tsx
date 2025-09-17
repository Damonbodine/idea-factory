'use client'
export default function Design63() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
            <div className="text-2xl font-bold">PodStream 63</div>
          </div>
          <nav className="flex gap-8">
            <a href="#">Discover</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </nav>
        </header>
        <main>
          <h1 className="text-6xl font-bold mb-6">
            Stories That<br />
            <span className="text-purple-500">Matter</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">Listen to the voices shaping our world</p>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg">
                <div className="aspect-square bg-purple-600/20 rounded mb-3"></div>
                <div className="text-sm font-bold">Episode {i + 1}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}