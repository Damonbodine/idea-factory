'use client'
export default function Design69() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-2xl">LENS.69</div>
          <nav className="flex gap-8 text-sm">
            <a href="#" className="hover:text-gray-400">Portfolio</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-light mb-12">
            Capturing<br />
            <span className="italic">Moments</span>
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-gray-900"></div>
            <div className="aspect-square bg-gray-800 col-span-2 row-span-2"></div>
            <div className="aspect-square bg-gray-700"></div>
            <div className="aspect-square bg-gray-600 col-span-2"></div>
            <div className="aspect-square bg-gray-500"></div>
          </div>
        </main>
      </div>
    </div>
  )
}