'use client'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Design6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30" />
      </div>
      <nav className="relative z-10 p-6">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span className="font-bold">GlassLab</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white/70">Services</a>
            <a href="#" className="hover:text-white/70">Portfolio</a>
            <a href="#" className="hover:text-white/70">Contact</a>
          </div>
        </div>
      </nav>
      <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 max-w-2xl text-center border border-white/20"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">
            Beautiful Glass Effects
          </h1>
          <p className="text-xl mb-8 text-white/80">
            Modern interfaces with depth and elegance
          </p>
          <button className="px-8 py-3 bg-white/20 backdrop-blur rounded-full border border-white/30 hover:bg-white/30 transition">
            Explore Designs
          </button>
        </motion.div>
      </main>
    </div>
  )
}