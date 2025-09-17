'use client'
import { motion } from 'framer-motion'

export default function Design13() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500/20 to-transparent" />
        <div className="grid grid-cols-8 gap-4 px-8 absolute bottom-0 left-0 right-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-64 border-l border-r border-cyan-500/30" />
          ))}
        </div>
      </div>
      <nav className="relative z-10 p-8 flex justify-between">
        <div className="text-3xl font-bold italic text-pink-400">RETRO/85</div>
        <div className="flex gap-6">
          <a href="#" className="text-cyan-300 hover:text-white">About</a>
          <a href="#" className="text-cyan-300 hover:text-white">Work</a>
        </div>
      </nav>
      <main className="relative z-10 flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-8xl font-black mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            SYNTHWAVE
          </h1>
          <p className="text-2xl text-pink-300 mb-8">Digital Dreams, Neon Reality</p>
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]">
            Enter the Grid
          </button>
        </motion.div>
      </main>
    </div>
  )
}