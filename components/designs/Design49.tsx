'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Minus } from 'lucide-react'

export default function Design49() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium tracking-widest">MINIMAL.STUDIO</div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-cyan-600 transition">Work</a>
            <a href="#" className="hover:text-cyan-600 transition">About</a>
            <a href="#" className="hover:text-cyan-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20"
        >
          <h1 className="text-7xl font-light leading-tight mb-8">
            We craft<br />
            <span className="font-bold italic">beautiful</span><br />
            digital products.
          </h1>
          <div className="flex items-center gap-4 mb-12">
            <Minus className="w-12 h-12 text-cyan-600" />
            <p className="text-gray-600 max-w-md">
              Minimalist design meets maximum impact. Every pixel purposeful, every interaction intentional.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-lg border-b-2 border-cyan-600 hover:gap-4 transition-all">
            View our work <ArrowUpRight />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-20 border-t">
          <div>
            <div className="text-6xl font-light text-cyan-600 mb-4">01</div>
            <h3 className="text-2xl font-light mb-2">Strategy</h3>
            <p className="text-gray-600">Thoughtful planning for meaningful outcomes</p>
          </div>
          <div>
            <div className="text-6xl font-light text-cyan-600 mb-4">02</div>
            <h3 className="text-2xl font-light mb-2">Design</h3>
            <p className="text-gray-600">Clean aesthetics with purpose</p>
          </div>
        </div>
      </main>
    </div>
  )
}