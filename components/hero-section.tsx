"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useCareerState } from "@/store/career" // Adjust the import according to your file structure

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { change, career } = useCareerState()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCareerChange = (career: "swe" | "cyber") => {
    change(career)  // Update the career state to either "swe" or "cyber"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-lg md:text3xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              {career === 'swe' ? "Computer Programmer" : "Cyber Operator"}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {career === 'swe' 
              ? "Explore the fast pacing environment of software engineering — where creativity meets technology to forge a new future" 
              : "Protecting assets isn't enough. We must also protect digital ones - where a cyber operator comes into play!"
            }
          </p>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => handleCareerChange('swe')}
              className={`px-6 py-3 rounded-lg ${career === 'swe' ? 'bg-blue-600' : 'bg-transparent'} text-white font-medium transition-colors`}
            >
              Software Engineering
            </button>
            <button 
              onClick={() => handleCareerChange('cyber')}
              className={`px-6 py-3 rounded-lg ${career === 'cyber' ? 'bg-blue-600' : 'bg-transparent'} text-white font-medium transition-colors`}
            >
              Cybersecurity
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
