"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Award, Users } from "lucide-react"

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const experiences = [
  {
    title: "Computer Architecture Lab, SJSU",
    role: "Research Assistant",
    period: "2025",
    description:
      "Deployed the Vortex RISC-V GPGPU on Intel FPGA by modifying and optimizing build scripts. Enabled successful execution of GPU kernels on hardware. Created detailed Markdown-based deployment and debugging guides to streamline development workflows and improve team productivity.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Vishwakarma Institute of Technology, Pune",
    role: "Computer Engineering Honors Student",
    period: "2018-2021",
    description:
      "Completed the Computer Engineering Honors program with a strong focus on Data Structures, Object-Oriented Programming, DBMS, and Web Technologies. Achieved a CGPA of 8.0, demonstrating strong academic performance and a solid foundation in software engineering principles.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Social Welfare & Development Committee",
    role: "Branding Head",
    period: "2020 - 2021",
    description:
      "Led the multimedia and social media team to maintain and enhance the club’s digital presence. Played a key role in planning and executing events. Coordinated cross-functional efforts to improve outreach and engagement.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "The Robotics Forum (TRF)",
    role: "Volunteer",
    period: "2020-2021",
    description:
      "Completed a structured training program covering robotics fundamentals including electronics, sensors, and control systems. Collaborated on hands-on projects with cross-functional teams.",
    icon: <Users className="w-6 h-6" />,
  },
]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
        >
          Experience & Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <motion.div
                  className="neumorphic-icon-container-3d p-4 rounded-full w-16 h-16 flex items-center justify-center"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "rgba(200, 200, 200, 0.1)",
                    transition: { duration: 0.8 },
                  }}
                >
                  {exp.icon}
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-grow glassmorphic-card-advanced p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.2,
                }}
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <motion.h3
                    className="text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.span
                    className="text-sm opacity-75 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <motion.h4
                  className="text-lg font-medium mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
                >
                  {exp.role}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.2 }}
                >
                  {exp.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

