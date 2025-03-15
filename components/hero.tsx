"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] bg-[length:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-background" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Emiliano Ramirez</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Computer Science Student & Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 mb-12"
        >
          <Button
            asChild
            variant="outline"
            size="icon"
            className="border-blue-200 hover:border-blue-300 hover:bg-blue-100/50 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/50"
          >
            <Link href="https://github.com/erami1789" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="border-blue-200 hover:border-blue-300 hover:bg-blue-100/50 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/50"
          >
            <Link href="https://linkedin.com/in/emiliano-ramirez" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="border-blue-200 hover:border-blue-300 hover:bg-blue-100/50 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/50"
          >
            <Link href="mailto:eramirezmartinez@csumb.edu" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-10"
        >
          <Link href="#about">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce text-blue-600 hover:text-blue-700 hover:bg-blue-100/50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/50"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

