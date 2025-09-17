'use client'
export default function Design20() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-sm tracking-[0.2em]">MINIMAL.DARK</div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-gray-400">Work</a>
            <a href="#" className="hover:text-gray-400">Studio</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </nav>
        <main>
          <h1 className="text-7xl font-thin mb-12">
            Less is<br />
            <span className="font-bold italic">everything</span>
          </h1>
          <div className="w-20 h-px bg-white mb-12" />
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-thin mb-4">01</div>
              <p className="text-gray-400">Strategy</p>
            </div>
            <div>
              <div className="text-4xl font-thin mb-4">02</div>
              <p className="text-gray-400">Design</p>
            </div>
            <div>
              <div className="text-4xl font-thin mb-4">03</div>
              <p className="text-gray-400">Develop</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}