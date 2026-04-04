"use client"

import { useEffect, useRef } from "react"

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null)
  const effectRef = useRef(null)

  useEffect(() => {
    let mounted = true

    const loadVanta = async () => {
      if (!vantaRef.current || effectRef.current) return

      const THREE = await import("three")
      const NET = (await import("vanta/dist/vanta.net.min")).default

      if (!mounted || !vantaRef.current) return

      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3f3f3f,
        backgroundColor: 0x0,
        points: 10,
        maxDistance: 25.0,
        spacing: 15.0,
      })
    }

    loadVanta()

    return () => {
      mounted = false
      if (effectRef.current) {
        effectRef.current.destroy()
        effectRef.current = null
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      <div ref={vantaRef} className="absolute inset-0 w-full h-full z-[-100] opacity-50" />
      {children}
    </div>
  )
}