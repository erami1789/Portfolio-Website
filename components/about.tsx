"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a Computer Science student at California State University, Monterey Bay, with a minor in Mathematics.
              My passion lies in developing innovative solutions and exploring new technologies.
            </p>
            <p>
              Currently, I'm working as an Undergraduate Research Assistant, developing a Next.js and TypeScript-based
              web application to showcase 3DRNA Lab research. I'm also experienced in tutoring and mentoring through my
              work with the Gaining Early Awareness and Readiness for Undergraduate Programs.
            </p>
            <p>
              When I'm not coding, I run a professional photography business, where I've developed skills in client
              management and business operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

