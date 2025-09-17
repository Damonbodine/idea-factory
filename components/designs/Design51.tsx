'use client'
export default function Design51() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold text-green-500">SOUNDWAVE</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-green-500 transition">Discover</a>
            <a href="#" className="hover:text-green-500 transition">Artists</a>
            <a href="#" className="hover:text-green-500 transition">Playlists</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-bold mb-8">
            Music for<br />
            <span className="text-green-500">Every Mood</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">Stream your creativity</p>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-green-600 to-green-900 rounded-lg"></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}