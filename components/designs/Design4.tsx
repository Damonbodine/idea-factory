'use client'
import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'

export default function Design4() {
  const [text, setText] = useState('')
  const fullText = 'Welcome to DevForge_'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-6">
      <div className="border border-green-500 p-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-5 h-5" />
          <span>SYSTEM.TERMINAL.v2.1</span>
        </div>
        <div className="mb-8">
          <div className="text-3xl mb-4">{text}</div>
          <div className="text-sm opacity-70">
            &gt; Initializing systems...<br />
            &gt; Loading modules...<br />
            &gt; Ready.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-green-500/30 p-4">
            <div className="text-xs mb-2">[SERVICES]</div>
            <div className="space-y-1 text-sm">
              <div>&gt; Full-Stack Development</div>
              <div>&gt; System Architecture</div>
              <div>&gt; Security Audits</div>
            </div>
          </div>
          <div className="border border-green-500/30 p-4">
            <div className="text-xs mb-2">[STATUS]</div>
            <div className="space-y-1 text-sm">
              <div className="text-green-400">● All Systems Operational</div>
              <div>Uptime: 99.99%</div>
              <div>Response: &lt;100ms</div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  )
}