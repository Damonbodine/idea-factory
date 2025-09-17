'use client'
export default function Design28() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="p-8">
        <div className="mb-8">
          <span className="text-green-600">user@design28:~$</span> ls -la
        </div>
        <div className="mb-8">
          <div className="text-green-300">drwxr-xr-x  5 user user 4096 Sep 17 12:00 .</div>
          <div className="text-green-300">drwxr-xr-x  3 user user 4096 Sep 17 11:00 ..</div>
          <div className="text-green-300">-rw-r--r--  1 user user  256 Sep 17 12:00 index.html</div>
        </div>
        <div className="mb-8">
          <span className="text-green-600">user@design28:~$</span> cat welcome.txt
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl mb-4 text-green-400">TERMINAL_DESIGN</h1>
          <p className="mb-8">Welcome to the command line interface of web design.</p>
          <div className="border border-green-400 p-4">
            <div>&gt; Executing creative.sh...</div>
            <div>&gt; Loading innovation modules...</div>
            <div>&gt; Design process initialized.</div>
          </div>
        </div>
        <div className="mt-8">
          <span className="text-green-600 animate-pulse">user@design28:~$</span>
          <span className="animate-pulse"> _</span>
        </div>
      </div>
    </div>
  )
}