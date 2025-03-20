"use client"

import { useEffect, useRef } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

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
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="year" stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <YAxis stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "0.5rem",
              color: "#E5E7EB",
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Average Salary"]}
            labelFormatter={(label) => `Year: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="salary"
            stroke="#60A5FA"
            strokeWidth={3}
            dot={{ fill: "#60A5FA", r: 6 }}
            activeDot={{ fill: "#2563EB", r: 8, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

