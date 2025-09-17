'use client'
export default function Design5() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-6 py-4">
          <div className="text-5xl font-serif font-bold">FORGE</div>
          <div className="text-xs tracking-widest">DIGITAL MAGAZINE</div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="bg-gray-100 aspect-video mb-6" />
            <h1 className="text-6xl font-serif mb-4">
              The Future of Digital Design
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              How AI is reshaping creative industries
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>By Sarah Chen</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>March 2024</span>
            </div>
          </div>
          <div className="col-span-4">
            <div className="border-t-4 border-black pt-4">
              <h3 className="font-bold mb-4">TRENDING</h3>
              <div className="space-y-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="border-b pb-2">
                    <div className="text-sm font-bold">Article Title {i}</div>
                    <div className="text-xs text-gray-600">2 hours ago</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}