'use client'
export default function Design48() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-center justify-between">
            <div className="text-5xl font-bold">M48</div>
            <div className="flex gap-2">
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className={`w-8 h-8 bg-${i === 0 ? 'white' : i === 1 ? 'gray-200' : i === 2 ? 'gray-400' : i === 3 ? 'gray-600' : 'gray-800'}`}></div>
              ))}
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-2 gap-px bg-gray-800">
            <div className="bg-black p-12">
              <h1 className="text-6xl mb-6">Mono<br />chrome</h1>
            </div>
            <div className="bg-black p-12">
              <p className="text-gray-400 text-xl">
                The power of contrast. The beauty of simplicity.
              </p>
            </div>
            <div className="bg-black p-12">
              <div className="w-full h-32 bg-gradient-to-r from-black via-gray-500 to-white"></div>
            </div>
            <div className="bg-black p-12">
              <button className="border-2 border-white px-8 py-4 hover:bg-white hover:text-black transition-all">
                EXPLORE SHADES
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}