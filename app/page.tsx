"use client"

import Link from "next/link"
import { ArrowRight, Code, Database, Globe, Laptop, Server, Zap } from "lucide-react"
import SalaryChart from "@/components/salary-chart"
import TechStack from "@/components/tech-stack"
import TimelineSection from "@/components/timeline-section"
import SkillsSection from "@/components/skills-section"
import HeroSection from "@/components/hero-section"
import { useCareerState } from "@/store/career"
import SoftwareEngineer from "@/components/main/software-engineer"
import CyberOps from "@/components/main/cyber-operator"

export default function Home() {

  const { career } = useCareerState()

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <HeroSection />

      {career === "swe" ? <SoftwareEngineer /> : career === "cyber" && <CyberOps />}

     
    </main>
  )
}

