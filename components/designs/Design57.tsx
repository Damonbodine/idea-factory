'use client'
export default function Design57() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b border-black pb-4 mb-20">
          <div className="flex justify-between items-baseline">
            <div className="text-5xl font-light tracking-wider">VOGUE</div>
            <div className="text-sm tracking-widest">COLLECTION 57</div>
          </div>
        </header>
        <main className="grid grid-cols-2 gap-16">
          <div>
            <div className="aspect-[3/4] bg-gray-100 mb-4"></div>
            <p className="text-xs tracking-widest">SPRING / SUMMER</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-light mb-8">
              Haute<br />Couture<br />Digital
            </h1>
            <p className="text-gray-600 mb-8">Where fashion meets technology</p>
            <button className="self-start border-b-2 border-black pb-1">
              VIEW COLLECTION
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}