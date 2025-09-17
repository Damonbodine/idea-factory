'use client'
export default function Design22() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-transparent to-yellow-400/30" />
      <div className="absolute inset-0 bg-gradient-to-bl from-green-400/20 via-transparent to-purple-600/20" />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-7xl font-bold mb-4">GRADIENT</h1>
          <h2 className="text-6xl font-light mb-8">MESH/22</h2>
          <p className="text-xl mb-8 text-white/80">Vibrant color compositions</p>
          <button className="px-8 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-full hover:bg-white/30">
            Explore Colors
          </button>
        </div>
      </div>
    </div>
  )
}