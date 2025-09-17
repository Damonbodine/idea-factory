const fs = require('fs')
const path = require('path')

const designTemplates = [
  // Bold & Vibrant
  `'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react'

export default function Design{ID}() {
  return (
    <div className="min-h-screen bg-gradient-to-br {GRADIENT} text-white">
      <nav className="px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-black">AGENCY</div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-{ACCENT}-200 transition">Services</a>
            <a href="#" className="hover:text-{ACCENT}-200 transition">Work</a>
            <a href="#" className="hover:text-{ACCENT}-200 transition">About</a>
            <a href="#" className="hover:text-{ACCENT}-200 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-7xl font-black mb-6 leading-tight">
            WE BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-{ACCENT}-200">
              BOLD IDEAS
            </span>
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Transform your vision into reality with cutting-edge solutions
          </p>
          <button className="px-8 py-4 bg-white text-{ACCENT}-600 font-bold rounded-full flex items-center gap-3 hover:scale-105 transition">
            Get Started <ArrowRight />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <Zap className="w-12 h-12 mb-4 text-{ACCENT}-300" />
            <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-white/80">Lightning-fast development cycles</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <Sparkles className="w-12 h-12 mb-4 text-{ACCENT}-300" />
            <h3 className="text-2xl font-bold mb-2">Creative Solutions</h3>
            <p className="text-white/80">Innovative approaches to every challenge</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <Star className="w-12 h-12 mb-4 text-{ACCENT}-300" />
            <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
            <p className="text-white/80">Excellence in every line of code</p>
          </div>
        </div>
      </main>
    </div>
  )
}`,

  // Startup Style
  `'use client'

import { motion } from 'framer-motion'
import { Rocket, Code, Users, TrendingUp } from 'lucide-react'

export default function Design{ID}() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br {GRADIENT} rounded-lg"></div>
            <span className="font-bold text-xl">StartupDev</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-{ACCENT}-600">Products</a>
            <a href="#" className="text-gray-600 hover:text-{ACCENT}-600">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-{ACCENT}-600">Pricing</a>
            <button className="px-4 py-2 bg-{ACCENT}-600 text-white rounded-lg hover:bg-{ACCENT}-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-{ACCENT}-100 text-{ACCENT}-700 rounded-full text-sm mb-4">
              <Rocket className="w-4 h-4" />
              Launch Your Next Project
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r {GRADIENT} bg-clip-text text-transparent">
              Ship Faster, Scale Smarter
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help startups build and launch products that users love
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-{ACCENT}-600 text-white rounded-lg hover:bg-{ACCENT}-700">
                Start Building
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <Code className="w-10 h-10 text-{ACCENT}-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">Maintainable, scalable architecture</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <Users className="w-10 h-10 text-{ACCENT}-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
            <p className="text-gray-600">Design that puts users first</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <TrendingUp className="w-10 h-10 text-{ACCENT}-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Focus</h3>
            <p className="text-gray-600">Built to scale with your success</p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}`,

  // Creative & Playful
  `'use client'

import { motion } from 'framer-motion'
import { Palette, Lightbulb, Heart, Magic } from 'lucide-react'

export default function Design{ID}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-{ACCENT}-50 to-pink-50">
      <nav className="px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br {GRADIENT} rounded-full animate-pulse"></div>
            <span className="text-2xl font-black">CreativeStudio</span>
          </div>
          <div className="flex gap-6">
            {['Work', 'Play', 'About', 'Contact'].map(item => (
              <a key={item} href="#" className="relative group">
                <span className="text-gray-700">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r {GRADIENT} group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-black mb-6">
            <span className="inline-block transform -rotate-3 text-{ACCENT}-600">Creative</span>{' '}
            <span className="inline-block transform rotate-3 text-pink-600">Code</span>{' '}
            <span className="inline-block transform -rotate-2 text-purple-600">Magic</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Where imagination meets innovation. We craft digital experiences that delight.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r {GRADIENT} text-white rounded-full font-bold transform hover:scale-105 transition shadow-xl">
            Let's Create Together
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Palette, label: 'Design', color: 'text-{ACCENT}-500' },
            { icon: Lightbulb, label: 'Ideas', color: 'text-yellow-500' },
            { icon: Heart, label: 'Passion', color: 'text-pink-500' },
            { icon: Magic, label: 'Innovation', color: 'text-purple-500' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
            >
              <item.icon className={\`w-12 h-12 mx-auto mb-3 \${item.color}\`} />
              <p className="font-bold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}`,

  // Minimalist Modern
  `'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Minus } from 'lucide-react'

export default function Design{ID}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium tracking-widest">MINIMAL.STUDIO</div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-{ACCENT}-600 transition">Work</a>
            <a href="#" className="hover:text-{ACCENT}-600 transition">About</a>
            <a href="#" className="hover:text-{ACCENT}-600 transition">Contact</a>
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
            <Minus className="w-12 h-12 text-{ACCENT}-600" />
            <p className="text-gray-600 max-w-md">
              Minimalist design meets maximum impact. Every pixel purposeful, every interaction intentional.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-lg border-b-2 border-{ACCENT}-600 hover:gap-4 transition-all">
            View our work <ArrowUpRight />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-20 border-t">
          <div>
            <div className="text-6xl font-light text-{ACCENT}-600 mb-4">01</div>
            <h3 className="text-2xl font-light mb-2">Strategy</h3>
            <p className="text-gray-600">Thoughtful planning for meaningful outcomes</p>
          </div>
          <div>
            <div className="text-6xl font-light text-{ACCENT}-600 mb-4">02</div>
            <h3 className="text-2xl font-light mb-2">Design</h3>
            <p className="text-gray-600">Clean aesthetics with purpose</p>
          </div>
        </div>
      </main>
    </div>
  )
}`,

  // Tech/Futuristic
  `'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu, Binary, Shield } from 'lucide-react'

export default function Design{ID}() {
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
          <div className="font-mono text-sm mb-4 text-green-300">// INITIALIZE</div>
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
}`
]

const gradients = [
  'from-purple-600 to-blue-600',
  'from-green-400 to-blue-500',
  'from-pink-500 to-orange-400',
  'from-indigo-500 to-purple-600',
  'from-red-500 to-yellow-500',
  'from-cyan-500 to-blue-500',
  'from-emerald-500 to-teal-500',
  'from-violet-600 to-pink-600',
  'from-amber-500 to-red-500',
  'from-blue-600 to-purple-600'
]

const accents = ['purple', 'blue', 'green', 'red', 'yellow', 'pink', 'indigo', 'orange', 'cyan', 'emerald']

// Create components directory
const componentsDir = path.join(__dirname, '..', 'components', 'designs')
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true })
}

// Generate 50 design components
for (let i = 1; i <= 50; i++) {
  const templateIndex = (i - 1) % designTemplates.length
  const gradientIndex = (i - 1) % gradients.length
  const accentIndex = (i - 1) % accents.length

  let content = designTemplates[templateIndex]
    .replace(/{ID}/g, i)
    .replace(/{GRADIENT}/g, gradients[gradientIndex])
    .replace(/{ACCENT}/g, accents[accentIndex])

  // Add variations for more uniqueness
  if (i > 5) {
    // Add slight modifications based on ID
    if (i % 3 === 0) {
      content = content.replace(/font-black/g, 'font-extrabold')
    }
    if (i % 5 === 0) {
      content = content.replace(/rounded-lg/g, 'rounded-xl')
      content = content.replace(/rounded-2xl/g, 'rounded-3xl')
    }
    if (i % 7 === 0) {
      content = content.replace(/hover:scale-105/g, 'hover:scale-110')
    }
  }

  fs.writeFileSync(
    path.join(componentsDir, `Design${i}.tsx`),
    content
  )
}

console.log('✅ Generated 50 design components successfully!')