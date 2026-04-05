"use client"
import { motion } from "framer-motion"

export default function Name3D() {
  return (
    <div className="w-full py-4">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-3d text-center"
        animate={{
          y: [0, -6, 0],
          rotateZ: [0, 0.5, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        Ishan Girgaonkar
      </motion.h1>
    </div>
  )
}