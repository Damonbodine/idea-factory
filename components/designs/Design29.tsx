'use client'
export default function Design29() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b-4 border-black pb-4 mb-12">
          <div className="flex justify-between items-end">
            <div className="text-6xl font-serif">MAGAZINE</div>
            <div className="text-sm">ISSUE 29 • 2025</div>
          </div>
        </header>
        <main className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="aspect-video bg-gray-200 mb-4"></div>
            <h1 className="text-4xl font-serif mb-4">Headlines That Matter</h1>
            <p className="text-lg leading-relaxed columns-2 gap-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-4">
            <div className="border-l-4 border-black pl-8">
              <h2 className="text-2xl font-bold mb-4">SIDEBAR</h2>
              <div className="space-y-4">
                <div className="pb-4 border-b">Article One</div>
                <div className="pb-4 border-b">Article Two</div>
                <div className="pb-4 border-b">Article Three</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}