"use client"

import { useEffect, useRef } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"
import Image from "next/image"

export default function SalaryChart() {
  const data = [
    { year: 2018, salary: 75000 },
    { year: 2019, salary: 80000 },
    { year: 2020, salary: 85000 },
    { year: 2021, salary: 92000 },
    { year: 2022, salary: 100000 },
    { year: 2023, salary: 110000 },
    { year: 2024, salary: 120000 },
    { year: 2025, salary: 130000 },
  ]

  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.style.height = "300px"
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={chartRef} className="w-full h-[300px]">
      <Image 
        src="/swe-salary.png"
        height={1000}
        width={1000}
        alt="Pic"
      />
    </div>
  )
}

