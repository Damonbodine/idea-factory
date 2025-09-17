'use client'
export default function Design16() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-auto">
      <div className="fixed top-8 left-8 z-50">
        <h1 className="text-2xl font-bold">H.SCROLL/16</h1>
      </div>
      <div className="flex items-center min-h-screen px-8">
        <div className="flex gap-8" style={{ width: 'max-content' }}>
          {['Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta', 'Project Epsilon'].map((project, i) => (
            <div key={i} className="w-[500px] h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 flex flex-col justify-end">
              <h2 className="text-4xl font-bold mb-4">{project}</h2>
              <p className="text-gray-400">Innovative digital solution {i + 1}</p>
              <button className="mt-4 px-6 py-2 bg-white text-black rounded">View Project</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}