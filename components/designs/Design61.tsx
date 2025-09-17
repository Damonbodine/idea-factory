'use client'
export default function Design61() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold text-gray-900">ESTATE.61</div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-700">Properties</a>
            <a href="#" className="text-gray-700">Agents</a>
            <a href="#" className="text-gray-700">About</a>
          </nav>
        </header>
        <main>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h1 className="text-6xl font-light mb-6">Find Your<br />Dream Home</h1>
              <p className="text-xl text-gray-600 mb-8">Luxury properties in prime locations</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-black text-white">Browse Listings</button>
                <button className="px-8 py-3 border border-black">Virtual Tours</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 aspect-square"></div>
              <div className="bg-gray-300 aspect-square"></div>
              <div className="bg-gray-300 aspect-square"></div>
              <div className="bg-gray-200 aspect-square"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}