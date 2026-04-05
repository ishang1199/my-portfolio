"use client"

import { motion } from "framer-motion"
import Name3D from "./name-3d"

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden rounded-full bg-transparent shadow-none transition-transform duration-300 hover:scale-105">
          <img
            src="/ishan.png"
            alt="Ishan Girgaonkar"
            className="w-full h-full rounded-full border border-white/20 object-cover object-[center_20%]"
          />
        </div>

        <div className="flex flex-col items-center">
          <Name3D />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-3"
          >
            <p className="text-base md:text-lg max-w-3xl text-center text-white dark:text-white leading-8">
              I'm a Full-Stack Developer focused on building scalable web applications, automation pipelines, and AI-powered solutions.
              I enjoy creating clean, responsive products that solve real-world problems through thoughtful engineering.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}