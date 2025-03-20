"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const technologies = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      description: "From vanilla JS to modern frameworks",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      description: "Component-based UI development",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      description: "Backend, data science, and AI",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      description: "JavaScript runtime for backends",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900",
      description: "Cloud infrastructure and services",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      description: "Containerization for deployment",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      description: "Type-safe JavaScript development",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      description: "NoSQL database for modern apps",
    },
  ]

  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Modern Tech Stack Evolution</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative flex flex-col items-center p-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 transition-colors"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="h-16 w-16 mb-4 flex items-center justify-center" style={{ color: tech.color }}>
              <img
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                className="h-12 w-12 object-contain"
                crossOrigin="anonymous"
              />
            </div>
            <h4 className="text-lg font-semibold mb-1">{tech.name}</h4>

            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-slate-900/90 rounded-xl p-4"
              >
                <p className="text-center text-sm">{tech.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

