'use client'
export default function Design40() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-8xl font-black text-white"
              style={{transform: 'perspective(400px) rotateY(15deg)'}}>
            GROOVY
          </h1>
          <div className="text-3xl text-yellow-300 mt-4">✿ Design 40 ✿</div>
        </header>
        <main>
          <div className="relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply"></div>
            <div className="absolute top-20 right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply"></div>
            <div className="relative z-10 text-center py-40">
              <p className="text-4xl text-white font-bold">Peace, Love & Pixels</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}