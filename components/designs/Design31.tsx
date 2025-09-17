'use client'
export default function Design31() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-8 left-8 z-50">
        <h1 className="text-2xl font-bold">H-SCROLL31</h1>
      </div>
      <div className="flex items-center h-screen">
        <div className="flex gap-8 px-8" style={{ width: 'max-content' }}>
          {['Project A', 'Project B', 'Project C', 'Project D'].map((project, i) => (
            <div key={i} className="w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">{project}</h2>
              <p>Innovative digital solutions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}