'use client'
export default function Design40() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-purple-100 p-8">
      <style jsx>{`
        .isometric {
          transform: rotateX(60deg) rotateZ(-45deg);
          transform-style: preserve-3d;
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">ISO40</h1>
        <div className="flex justify-center items-center h-96">
          <div className="isometric">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600"
                  style={{
                    transform: `translateZ(${Math.random() * 100}px)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}