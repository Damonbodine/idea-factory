'use client'
export default function Design42() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="inline-block">
            <h1 className="text-8xl font-black text-transparent"
                style={{
                  WebkitTextStroke: '3px #ff00ff',
                  textShadow: '5px 5px 0 #00ffff'
                }}>
              STREET
            </h1>
            <div className="text-3xl text-yellow-400 -mt-4">DESIGN 42</div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 transform rotate-2">
              <h2 className="text-4xl font-bold text-white mb-4">URBAN</h2>
              <p className="text-white">Raw creativity unleashed</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 transform -rotate-2">
              <h2 className="text-4xl font-bold text-white mb-4">REBEL</h2>
              <p className="text-white">Breaking all the rules</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-red-600 text-white px-8 py-4 text-2xl font-bold transform skew-x-12">
              TAG YOUR STYLE
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}