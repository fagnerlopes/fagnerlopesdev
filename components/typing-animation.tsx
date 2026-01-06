"use client"

import { useEffect, useState } from "react"

const technologies = ["Laravel", "Vue.js", "React", "PHP", "TypeScript"]

export function TypingAnimation() {
  const [displayTech, setDisplayTech] = useState("")
  const [techIndex, setTechIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isInitialTyping, setIsInitialTyping] = useState(true)

  const currentTech = technologies[techIndex]

  useEffect(() => {
    if (isInitialTyping) {
      // Digitação inicial da primeira tecnologia
      if (displayTech.length < currentTech.length) {
        const timeout = setTimeout(() => {
          setDisplayTech(currentTech.slice(0, displayTech.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Terminou a digitação inicial, espera 2s e começa a alternar
        const timeout = setTimeout(() => {
          setIsInitialTyping(false)
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Alternância de tecnologias
      if (isDeleting) {
        if (displayTech.length > 0) {
          const timeout = setTimeout(() => {
            setDisplayTech(displayTech.slice(0, -1))
          }, 50)
          return () => clearTimeout(timeout)
        } else {
          // Terminou de apagar, muda para próxima tech
          setIsDeleting(false)
          setTechIndex((prev) => (prev + 1) % technologies.length)
        }
      } else {
        if (displayTech.length < currentTech.length) {
          const timeout = setTimeout(() => {
            setDisplayTech(currentTech.slice(0, displayTech.length + 1))
          }, 100)
          return () => clearTimeout(timeout)
        } else {
          // Terminou de digitar, espera 2s e começa a apagar
          const timeout = setTimeout(() => {
            setIsDeleting(true)
          }, 2000)
          return () => clearTimeout(timeout)
        }
      }
    }
  }, [displayTech, isDeleting, techIndex, currentTech, isInitialTyping])

  return (
    <div className="mx-auto max-w-[700px] text-lg leading-relaxed md:text-xl space-y-2">
      <p className="text-muted-foreground">
        Especialista em desenvolvimento web com experiência em
      </p>
      <p className="text-2xl md:text-3xl font-bold text-foreground min-h-[2.5rem]">
        {displayTech}
        <span className="inline-block w-0.5 h-7 bg-purple-500 ml-1 animate-pulse" />
      </p>
    </div>
  )
}

