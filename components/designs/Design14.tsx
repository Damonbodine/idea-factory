'use client'
export default function Design14() {
  return (
    <div className="min-h-screen bg-white p-8">
      <header className="border-b-4 border-double border-black pb-4 mb-8">
        <div className="text-center">
          <div className="text-6xl font-serif">The Digital Times</div>
          <div className="flex justify-center gap-8 text-xs mt-2">
            <span>VOL. XCII</span>
            <span>•</span>
            <span>NO. 31,415</span>
            <span>•</span>
            <span>MARCH 2024</span>
            <span>•</span>
            <span>$2.50</span>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <h1 className="text-5xl font-serif mb-4 leading-tight">
              Revolutionary Web Design Transforms Digital Landscape
            </h1>
            <div className="columns-2 gap-6 text-sm">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            </div>
          </div>
          <div className="col-span-2 border-l pl-4">
            <h3 className="font-serif text-2xl mb-4">In This Issue</h3>
            <div className="space-y-2 text-sm">
              <div className="pb-2 border-b">Tech News - Page 3</div>
              <div className="pb-2 border-b">Design Trends - Page 7</div>
              <div className="pb-2 border-b">Opinion - Page 12</div>
              <div className="pb-2 border-b">Markets - Page 15</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}