"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTheme } from "next-themes"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import LoadingScreen from "@/components/loading-screen"
import { ThemeProvider } from "@/components/theme-provider"
import VantaBackground from "@/components/vanta-background"
import TypewriterEffect from "@/components/typewriter-effect"
import Chatbot from "@/components/chatbot"
import BrushStrokes from "@/components/brush-strokes"
import ProfileSection from "@/components/profile-section"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const mainRef = useRef(null)
  const { theme } = useTheme()

  const y = useTransform(scrollYProgress, [0, 0.5], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) {
      const sections = document.querySelectorAll("section")

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      gsap.to(".progress-bar", {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
      })
    }
  }, [loading])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <title>Ishan | Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white overflow-hidden">
        <CustomCursor />
        <Navbar />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 dark:from-gray-700 dark:via-gray-300 dark:to-gray-700 z-50"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />

        <main ref={mainRef} className="relative z-10">
          <section id="home" className="min-h-screen relative">
            <VantaBackground>
              <div className="flex items-center justify-center min-h-screen px-4 relative z-10">
                <motion.div
                  className="text-center w-full max-w-5xl mx-auto bg-black/10 dark:bg-white/5 backdrop-blur-sm p-8 rounded-xl"
                  style={{ y, opacity }}
                >
                  <ProfileSection />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col items-center justify-center mt-8"
                  >
                    <div className="h-8 mb-4">
                      <TypewriterEffect
                        words={[
                          "I'm a Full-Stack Developer",
                          "I'm a DevOps Engineer",
                          "I'm an AI/ML Builder",
                          "I'm a Software Engineer",
                          "I'm a Problem Solver",
                        ]}
                        speed={80}
                        delay={2000}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex flex-wrap gap-4 justify-center mt-8"
                  >
                    <motion.a
                      href="#projects"
                      className="neumorphic-btn-3d px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Projects
                    </motion.a>

                    <motion.a
                      href="#contact"
                      className="glassmorphic-btn-advanced px-6 py-3 rounded-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Me
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>

              <br />
              <br />
            </VantaBackground>
          </section>

          <div className="relative">
            <BrushStrokes />
            <div className="container mx-auto px-4">
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </div>
        </main>

        <Chatbot />
      </div>
    </ThemeProvider>
  )
}