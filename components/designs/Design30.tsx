'use client'
export default function Design30() {
  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="container mx-auto px-8 py-16">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-48 bg-blue-500 transform rotate-12"></div>
        <div className="absolute bottom-20 left-40 w-40 h-20 bg-green-500 skew-x-12"></div>
        <div className="relative z-10">
          <header className="text-center mb-20">
            <div className="inline-block bg-white p-8 shadow-xl transform -rotate-2">
              <h1 className="text-6xl font-black">MEMPHIS</h1>
              <div className="text-2xl">DESIGN 30</div>
            </div>
          </header>
          <main className="text-center">
            <div className="inline-block bg-black text-white p-12 transform rotate-1">
              <h2 className="text-3xl mb-4">Playful Geometry</h2>
              <p>Where fun meets function</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}