'use client'
export default function Design44() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b border-gray-200 pb-8 mb-12">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-light">Gallery 44</div>
            <nav className="flex gap-8 text-sm uppercase tracking-wider">
              <a href="#">Exhibitions</a>
              <a href="#">Artists</a>
              <a href="#">Collection</a>
              <a href="#">Visit</a>
            </nav>
          </div>
        </header>
        <main>
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-4">Contemporary Vision</h1>
            <p className="text-xl text-gray-600">Curated Digital Experiences</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className={`${i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''} bg-gray-100 aspect-square`}></div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="border-2 border-black px-8 py-3 uppercase tracking-wider">
              View Exhibition
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}