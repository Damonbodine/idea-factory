'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu, Binary, Shield } from 'lucide-react'

export default function Design15() {
  return (
    <div className="min-h-screen bg-black text-green-400">
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)',
          backgroundSize: '100% 4px'
        }}></div>
      </div>

      <nav className="relative z-10 px-8 py-6 border-b border-green-400/30">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span className="font-mono text-xl">TECHFORGE</span>
          </div>
          <div className="flex gap-6 font-mono text-sm">
            <a href="#" className="hover:text-green-300 transition">[SERVICES]</a>
            <a href="#" className="hover:text-green-300 transition">[PROJECTS]</a>
            <a href="#" className="hover:text-green-300 transition">[CONTACT]</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="font-mono text-sm mb-4 text-green-300">{/* INITIALIZE */}</div>
          <h1 className="text-5xl font-bold mb-6 font-mono">
            <span className="text-white">NEXT_GEN</span>
            <span className="animate-pulse">_</span>
            <br />
            <span className="text-green-400">DEVELOPMENT</span>
          </h1>
          <p className="text-green-300 mb-8 font-mono max-w-2xl">
            &gt; Building the future with cutting-edge technology and innovative solutions
          </p>
          <button className="px-6 py-3 border border-green-400 hover:bg-green-400 hover:text-black transition font-mono">
            [EXECUTE] Launch Project
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, label: 'PROCESSING', desc: 'High-performance computing' },
            { icon: Shield, label: 'SECURITY', desc: 'Military-grade encryption' },
            { icon: Binary, label: 'OPTIMIZATION', desc: 'Efficient algorithms' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-green-400/30 p-6 hover:border-green-400 transition bg-black/50"
            >
              <item.icon className="w-8 h-8 mb-4" />
              <h3 className="font-mono text-lg mb-2">{item.label}</h3>
              <p className="text-green-300 text-sm font-mono">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}