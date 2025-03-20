"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Software Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Explore the exciting world of software development — where creativity meets technology to build the digital
            future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#description"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Explore Career
            </Link>
            <Link
              href="#education"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent text-white font-medium border border-white/30 hover:bg-white/10 transition-colors"
            >
              Education Path
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
