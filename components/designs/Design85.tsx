'use client'
export default function Design85() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-bold text-purple-400">STUDIO 85</div>
          <nav className="flex gap-8 text-purple-300">
            <a href="#">Recording</a>
            <a href="#">Mixing</a>
            <a href="#">Artists</a>
          </nav>
        </header>
        <main className="text-white">
          <h1 className="text-7xl font-bold mb-8">
            Where Music<br />
            <span className="text-purple-400">Comes Alive</span>
          </h1>
          <p className="text-xl text-purple-200 mb-12">Professional recording & production</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-purple-800/30 backdrop-blur border border-purple-600 rounded-lg p-8">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-2">Vocal Booth</h3>
              <p className="text-purple-200">Crystal clear recordings</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur border border-purple-600 rounded-lg p-8">
              <div className="text-3xl mb-4">🎹</div>
              <h3 className="text-xl font-bold mb-2">Live Room</h3>
              <p className="text-purple-200">Full band sessions</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur border border-purple-600 rounded-lg p-8">
              <div className="text-3xl mb-4">🎛️</div>
              <h3 className="text-xl font-bold mb-2">Control Room</h3>
              <p className="text-purple-200">State-of-the-art mixing</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}