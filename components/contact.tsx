"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log(formState)
    alert("Thank you for your message! This is a demo form.")
  }

  return (
    <section id="contact" className="py-20 bg-blue-50/50 dark:bg-blue-950/20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Feel free to reach out to me directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a
                    href="mailto:eramirezmartinez@csumb.edu"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    eramirezmartinez@csumb.edu
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a href="tel:8317894047" className="hover:underline hover:text-blue-600 dark:hover:text-blue-300">
                    (831) 789-4047
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a
                    href="https://linkedin.com/in/emiliano-ramirez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    linkedin.com/in/emiliano-ramirez
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a
                    href="https://github.com/erami1789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    github.com/erami1789
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-400 dark:border-blue-800 dark:focus:border-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-400 dark:border-blue-800 dark:focus:border-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-400 dark:border-blue-800 dark:focus:border-blue-600"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

