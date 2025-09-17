'use client'
export default function Design8() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="bg-red-600 text-white p-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          ★ NEW PROJECTS AVAILABLE ★ CONTACT US NOW ★ LIMITED TIME OFFER ★
        </div>
      </div>
      <header className="bg-black text-yellow-400 p-6">
        <div className="text-6xl font-black">BRUTAL/FORCE</div>
      </header>
      <main className="p-6">
        <div className="bg-blue-600 text-white p-12 mb-6 transform -rotate-1">
          <h1 className="text-5xl font-black mb-4">
            WE DON&apos;T DO PRETTY
          </h1>
          <p className="text-2xl">WE DO POWERFUL</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-yellow-400 p-6 transform rotate-1">
            <div className="text-2xl font-black">FAST</div>
          </div>
          <div className="bg-green-500 text-white p-6">
            <div className="text-2xl font-black">BOLD</div>
          </div>
          <div className="bg-purple-600 text-white p-6 transform -rotate-1">
            <div className="text-2xl font-black">LOUD</div>
          </div>
        </div>
        <div className="bg-black text-white p-6 mt-6">
          <button className="bg-red-600 px-8 py-4 text-2xl font-black hover:bg-red-700">
            HIRE US NOW!!!
          </button>
        </div>
      </main>
    </div>
  )
}