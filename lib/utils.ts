import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getDevIconClassName = (techName: string) => {
  const normalizedTechName = techName.toLowerCase().replace(/ /g, '-').toLowerCase();
  


  return `${techMap[normalizedTechName]} colored` || "devicon-devicon-plain";
};
