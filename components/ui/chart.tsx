import type React from "react"

export const LineChart = ({ children, data, margin }: { children: React.ReactNode; data: any; margin: any }) => {
  return <div>{children}</div>
}

export const Line = ({
  type,
  dataKey,
  stroke,
  strokeWidth,
  dot,
  activeDot,
}: { type: any; dataKey: any; stroke: any; strokeWidth: any; dot: any; activeDot: any }) => {
  return <div />
}

export const XAxis = ({ dataKey, stroke, tick }: { dataKey: any; stroke: any; tick: any }) => {
  return <div />
}

export const YAxis = ({
  stroke,
  tick,
  tickFormatter,
}: { stroke: any; tick: any; tickFormatter?: (value: number) => string }) => {
  return <div />
}

export const CartesianGrid = ({ strokeDasharray, stroke }: { strokeDasharray: any; stroke: any }) => {
  return <div />
}

export const Tooltip = ({
  contentStyle,
  formatter,
  labelFormatter,
}: { contentStyle: any; formatter: any; labelFormatter: any }) => {
  return <div />
}

export const ResponsiveContainer = ({
  children,
  width,
  height,
}: { children: React.ReactNode; width: any; height: any }) => {
  return <div>{children}</div>
}

