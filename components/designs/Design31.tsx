'use client'
export default function Design31() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-2 bg-gray-900 p-4">
          <div className="text-xl font-bold mb-8">DASH/31</div>
          <nav className="space-y-2">
            {['Overview', 'Analytics', 'Reports', 'Settings'].map(item => (
              <div key={item} className="px-4 py-2 bg-gray-800 rounded">{item}</div>
            ))}
          </nav>
        </aside>
        <main className="col-span-10 p-8">
          <h1 className="text-3xl mb-8">Data Control Center</h1>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg">
                <div className="text-sm text-gray-400 mb-2">METRIC {i}</div>
                <div className="text-3xl font-bold mb-4">{(i * 1234).toLocaleString()}</div>
                <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}