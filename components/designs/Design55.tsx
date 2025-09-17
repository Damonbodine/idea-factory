'use client'
export default function Design55() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-black italic text-red-500">POWER</div>
          <div className="flex gap-6 text-sm uppercase">
            <a href="#">Train</a>
            <a href="#">Nutrition</a>
            <a href="#">Results</a>
          </div>
        </header>
        <main>
          <h1 className="text-8xl font-black mb-8">
            NO<br />
            PAIN<br />
            <span className="text-red-500">NO GAIN</span>
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-12">
            {['STRENGTH', 'CARDIO', 'FLEXIBILITY', 'ENDURANCE'].map(item => (
              <div key={item} className="bg-red-500 p-6 text-center font-bold">
                {item}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}