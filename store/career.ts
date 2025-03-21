import { create } from 'zustand'

interface CareerStateProps {
  career: "swe" | "cyber"
  change: (career: "swe" | "cyber") => void
}

export const useCareerState = create<CareerStateProps>()((set) => ({
  career: "swe",
  change: (career) => set(() => ({ career })) 
}))
