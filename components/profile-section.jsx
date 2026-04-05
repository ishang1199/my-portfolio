"use client"

import { motion } from "framer-motion"
import Name3D from "./name-3d"

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto w-full px-4"
      >
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 overflow-hidden rounded-full bg-transparent shadow-none transition-transform duration-300 hover:scale-105">
  <img
    src="/ishan.png"
    alt="Ishan"
    className="w-full h-full rounded-full border border-white/20 object-cover object-[center_20%]"
  />
</div>

        <div className="flex flex-col items-center">
          <Name3D />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4"
          >
            {/*<div className="h-8 mb-4 flex justify-center">
              <span className="text-lg md:text-xl font-medium text-white dark:text-white">
                Full-Stack Developer & ML Enthusiast
              </span>
            </div>*/}
            <p className="text-base md:text-lg max-w-xl text-center text-white dark:text-white leading-8 md:leading-9">
              I'm a Full-Stack Developer focused on building scalable web applications, automation pipelines, and AI-powered solutions. 
              I enjoy creating clean, responsive products that solve real-world problems through thoughtful engineering.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

