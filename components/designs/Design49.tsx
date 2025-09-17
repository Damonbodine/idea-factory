'use client'
export default function Design49() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="bg-yellow-500 text-black p-2 inline-block">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black">⚙</div>
              <div>
                <div className="text-2xl font-black">INDUSTRIAL</div>
                <div className="text-xs">DESIGN UNIT 49</div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="bg-gray-800 text-white p-12">
            <h1 className="text-5xl font-black mb-8">HEAVY DUTY<br />INTERFACES</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {['STEEL', 'CONCRETE', 'POWER', 'BUILD'].map(word => (
                <div key={word} className="bg-yellow-500 text-black p-4 text-center font-black">
                  {word}
                </div>
              ))}
            </div>
            <p className="text-gray-300">
              Robust solutions for demanding environments. Built to last.
            </p>
          </div>
          <div className="bg-yellow-500 h-8 flex items-center px-4">
            <div className="flex gap-4">
              {Array.from({length: 10}).map((_, i) => (
                <div key={i} className="w-1 h-4 bg-black"></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}