'use client'
export default function Design15() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-purple-100 p-8">
      <style jsx>{`
        .isometric {
          transform: rotateX(60deg) rotateZ(-45deg);
          transform-style: preserve-3d;
        }
      `}</style>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-900">ISO/METRIC</h1>
      </header>
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="isometric">
          <div className="grid grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 shadow-xl"
                style={{
                  transform: `translateZ(${i * 20}px)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-purple-700">3D Design Solutions</p>
      </div>
    </div>
  )
}