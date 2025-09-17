'use client'
export default function Design19() {
  return (
    <div className="min-h-screen bg-yellow-100 p-8">
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-red-500 transform rotate-45" />
      <div className="absolute bottom-20 left-1/3 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-green-500" />

      <nav className="relative z-10 flex justify-between items-center mb-20">
        <div className="text-3xl font-black">MEMPHIS/19</div>
        <div className="flex gap-6">
          <a href="#" className="px-4 py-2 bg-black text-white">Work</a>
          <a href="#" className="px-4 py-2 border-2 border-black">Info</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-6xl font-black mb-6">
            PLAYFUL<br />
            <span className="bg-pink-300">DESIGN</span><br />
            PATTERNS
          </h1>
          <p className="text-xl mb-8">Bold shapes, bright colors, radical ideas</p>
          <button className="px-8 py-4 bg-blue-500 text-white font-bold transform -rotate-2 hover:rotate-0 transition">
            GET FUNKY
          </button>
        </div>
      </main>
    </div>
  )
}