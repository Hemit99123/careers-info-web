"use client"

import HeroSection from "@/components/swe/hero-section"
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

