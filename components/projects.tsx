"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Farm-ng Robotics Competition",
    description:
      "Accessed and controlled the robot remotely using SSH to deploy and test code directly on the hardware. Mentored and guided a high school team, providing technical support and helping them understand robotics concepts and coding principles. Analyzed and modified Farm-ng's codebase to integrate new robot functionalities, improving performance and adaptability.",
    technologies: ["Python", "C", "C++", "Hardware"],
    period: "August 2024 – December 2024",
    github: "#",
    liveDemo: null,
  },
  {
    title: "3DRNA Lab Research Portal",
    description:
      "Developed a comprehensive web application to showcase the 3DRNA Lab's research findings and data visualizations. Implemented interactive 3D models of RNA structures using Three.js, allowing researchers to manipulate and analyze molecular structures in real-time. Created a responsive dashboard for tracking research progress and displaying publication metrics.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "React"],
    period: "January 2025 – Present",
    github: "#",
    liveDemo: "#",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-blue-50/50 dark:bg-blue-950/20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-blue-300 hover:border-blue-400 hover:bg-blue-100/50 dark:border-blue-700 dark:hover:border-blue-600 dark:hover:bg-blue-900/50"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>

                  {project.liveDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-blue-300 hover:border-blue-400 hover:bg-blue-100/50 dark:border-blue-700 dark:hover:border-blue-600 dark:hover:bg-blue-900/50"
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

