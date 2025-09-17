'use client'
export default function Design41() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-2xl font-light">CORPORATE</div>
          <nav className="flex gap-12 text-sm">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <main>
          <div className="mb-20">
            <h1 className="text-7xl font-extralight mb-8">
              Enterprise<br />
              Solutions
            </h1>
            <div className="w-24 h-0.5 bg-black"></div>
          </div>
          <div className="grid grid-cols-3 gap-16">
            <div>
              <div className="text-4xl font-light mb-4">01</div>
              <h3 className="text-xl mb-2">Strategy</h3>
              <p className="text-gray-600">Comprehensive planning for digital transformation</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-4">02</div>
              <h3 className="text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-4">03</div>
              <h3 className="text-xl mb-2">Excellence</h3>
              <p className="text-gray-600">Uncompromising quality in execution</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}