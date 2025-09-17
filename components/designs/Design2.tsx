'use client'
export default function Design2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between">
          <div className="font-mono text-sm">MINIMAL/STUDIO</div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Info</a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <h1 className="text-6xl font-light leading-tight">
              Design is<br />intelligence<br />made visible
            </h1>
          </div>
          <div className="col-span-4 pt-20">
            <p className="text-sm text-gray-600 mb-8">
              We craft thoughtful digital experiences with purpose and clarity.
            </p>
            <a href="#" className="text-sm underline">Explore Work →</a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px bg-gray-200 mt-20">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white aspect-square" />
          ))}
        </div>
      </main>
    </div>
  )
}