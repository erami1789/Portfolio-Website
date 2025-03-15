"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "California State University, Monterey Bay",
    location: "Seaside, CA",
    period: "Jan 2025 – Present",
    description: [
      "Developing a Next.js, TypeScript, and CSS-based web application to showcase 3DRNA Lab research, increasing accessibility and engagement.",
      "Designing an interactive user interface to present research data in a visually intuitive format.",
      "Integrating real-time data updates and backend functionalities to ensure accurate representation of research progress.",
    ],
  },
  {
    title: "Gaining Early Awareness and Readiness for Undergraduate Programs",
    company: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    period: "May 2023 – Jan 2025",
    description: [
      "Utilize specialized software to input, manage, and process sensitive student data securely.",
      "Provide tutoring, mentoring, and counseling in one-on-one and in-class settings.",
      "Increase student academic performance and preparation for college.",
      "Create workshops, presentations, financial aid advising, & educational field trips.",
    ],
  },
  {
    title: "Professional Photographer",
    company: "Emis.Portfolio",
    location: "Bay Area, CA",
    period: "May 2022 – Present",
    description: [
      "Manage and operate a professional photography business.",
      "Use Excel to track client bookings, invoices, and payments, optimizing workflow efficiency.",
      "Consult with clients to tailor photography packages to their needs, ensuring a seamless experience.",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        <div ref={ref} className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="md:ml-auto shrink-0 border-blue-300 dark:border-blue-700">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

