"use client"

import HeroSection from "@/components/hero-section"
import { useCareerState } from "@/store/career"
import WebDev from "@/components/main/web-developer"
import CyberOps from "@/components/main/cyber-operator"
export default function Home() {

  const { career } = useCareerState()

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <HeroSection />

      {career === "swe" ? <WebDev /> : career === "cyber" && <CyberOps />}

     
    </main>
  )
}

