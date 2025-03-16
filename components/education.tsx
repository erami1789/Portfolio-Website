"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const educationData = [
  {
    school: "California State University, Monterey Bay",
    location: "Seaside, CA",
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
    period: "Aug. 2024 – Present",
    achievements: [],
    clubs: ["Network & Security Club"]
  },
  {
    school: "Hartnell College",
    location: "Salinas, CA",
    degree: "Associate of Science in Computer Science, Associate of Arts in General Studies",
    period: "Aug. 2022 – May 2024",
    achievements: ["Dean's List: Fall 2022, Fall 2023, Spring 2024", "President's List: Spring 2023"],
    clubs: [],
  },
]


export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-900/20 hover:bg-gray-100/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

        <div ref={ref} className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              whileHover={{
                scale: 1.05, // Slightly enlarges the card
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", // Adds a soft shadow
                borderColor: "#0EA5E9", // Changes border color to sky blue
              }}
              
            >
              <Card className="border-gray-200 dark:border-gray-800 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{edu.school}</CardTitle>
                      <CardDescription className="mt-1">{edu.location}</CardDescription>
                    </div>
                    <Badge variant="outline" className="md:ml-auto shrink-0 border-gray-300 dark:border-gray-700">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-4">{edu.degree}</p>
                  {edu.achievements.length > 0 && (
                    <div className="mt-2">
                      <p className="font-medium mb-2">Achievements:</p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                   {edu.clubs.length > 0 && (
                      <div className="mt-2">
                          <p className="font-medium mb-2">Clubs:</p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            {edu.clubs.map((club, i) => (
                          <li key={i}>{club}</li>
                            ))}
                        </ul>
                    </div>
                  )}
                  <motion.div
  className="w-full bg-muted rounded-full h-2 mt-4 overflow-hidden"
  initial={{ width: 0 }}
  whileInView={{ width: edu.school === "California State University, Monterey Bay" ? "75%" : "100%" }} 
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
>
  <div className="bg-primary h-2 rounded-full w-full" />
</motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



