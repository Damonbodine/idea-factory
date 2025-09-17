'use client'
import { motion } from 'framer-motion'

export default function Design11() {
  return (
    <div className="min-h-screen bg-orange-50 overflow-hidden">
      <svg className="absolute top-0 left-0" width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="orange" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30" />
      <div className="relative z-10">
        <nav className="p-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-900">Organic</div>
          <div className="flex gap-6">
            <a href="#" className="text-orange-700 hover:text-orange-900">About</a>
            <a href="#" className="text-orange-700 hover:text-orange-900">Work</a>
            <a href="#" className="text-orange-700 hover:text-orange-900">Contact</a>
          </div>
        </nav>
        <main className="px-8 py-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-orange-900 mb-6">
              Fluid Design<br />
              Natural Flow
            </h1>
            <p className="text-xl text-orange-700 mb-8 max-w-2xl">
              We create interfaces that feel alive, organic, and human
            </p>
            <button className="px-8 py-4 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition">
              Explore Nature
            </button>
          </motion.div>
          <div className="mt-20 flex justify-center gap-8">
            <div className="w-32 h-32 bg-orange-200 rounded-full" />
            <div className="w-24 h-24 bg-pink-200 rounded-full mt-8" />
            <div className="w-40 h-40 bg-orange-300 rounded-full -mt-4" />
          </div>
        </main>
      </div>
    </div>
  )
}