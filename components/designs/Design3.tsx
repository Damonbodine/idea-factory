'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Design3() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-6 left-6 z-50">
        <div className="w-12 h-12 bg-red-500 rounded-full" />
      </div>
      <div className="fixed top-6 right-6 z-50">
        <button className="text-sm">MENU</button>
      </div>
      <main className="relative">
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-yellow-400" />
        <div className="relative z-10 container mx-auto px-6 pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl font-black mix-blend-difference"
          >
            BREAK<br />
            THE<br />
            RULES
          </motion.h1>
          <div className="mt-20 max-w-md">
            <p className="text-lg mb-6">
              Unconventional design for brands that dare to be different.
            </p>
            <button className="flex items-center gap-2 text-lg font-bold">
              Start a Project <ArrowUpRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}