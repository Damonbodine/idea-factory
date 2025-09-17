'use client'
export default function Design38() {
  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-12">
          <div className="bg-red-600 text-white p-4 inline-block transform -skew-x-12 shadow-xl">
            <h1 className="text-5xl font-black italic">KABOOM!</h1>
          </div>
        </header>
        <main className="grid grid-cols-2 gap-4">
          <div className="bg-white border-4 border-black p-8">
            <div className="bg-blue-600 text-white p-4 mb-4 relative">
              <div className="text-2xl font-bold">POW!</div>
              <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-600 border-r-[20px] border-r-transparent"></div>
            </div>
            <p className="text-lg font-bold">Meanwhile, at Design HQ...</p>
          </div>
          <div className="bg-white border-4 border-black p-8">
            <div className="text-center">
              <div className="text-6xl font-black text-red-600">BANG!</div>
              <p className="mt-4">Action-packed interfaces!</p>
            </div>
          </div>
          <div className="col-span-2 bg-white border-4 border-black p-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">Coming Soon...</div>
              <div className="text-xl">The Amazing Design 38</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}