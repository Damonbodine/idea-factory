'use client'
export default function Design21() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-8 grid-rows-8 h-screen">
        <div className="col-span-2 row-span-2 bg-black flex items-center justify-center">
          <div className="text-white font-bold">GEO/21</div>
        </div>
        <div className="col-span-3 row-span-2 bg-red-500" />
        <div className="col-span-3 row-span-3 bg-blue-500" />
        <div className="col-span-2 row-span-3 bg-yellow-400" />
        <div className="col-span-3 row-span-3 bg-green-500 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-2">GEOMETRIC</h1>
            <p>Design System</p>
          </div>
        </div>
        <div className="col-span-3 row-span-3 bg-purple-500" />
        <div className="col-span-2 row-span-3 bg-orange-500" />
        <div className="col-span-3 row-span-2 bg-pink-500" />
      </div>
    </div>
  )
}