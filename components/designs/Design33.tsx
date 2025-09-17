'use client'
export default function Design33() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="border-b-8 border-double border-black pb-4 mb-8">
          <div className="text-center">
            <div className="text-6xl font-serif font-black">The Daily Design</div>
            <div className="flex justify-between mt-2">
              <span>Vol. XXXIII</span>
              <span>Design & Innovation</span>
              <span>Edition 2025</span>
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h1 className="text-5xl font-serif mb-4">Breaking: New Design Paradigm</h1>
              <div className="columns-3 gap-6 text-sm">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p className="mb-4">Sed do eiusmod tempor incididunt ut labore...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation...</p>
              </div>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-xl font-bold mb-4">INDEX</h2>
              <div className="text-sm space-y-2">
                <div>Business......A1</div>
                <div>Tech.........B1</div>
                <div>Design.......C1</div>
                <div>Opinion......D1</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}