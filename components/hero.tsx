import Image from "next/image"
import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react"
import { SiLaravel, SiVuedotjs, SiReact, SiPhp, SiTypescript } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import { VisitorCounter } from "@/components/visitor-counter"

export function Hero() {
  const techStack = [
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  ]

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:fagnernlopes@gmail.com",
      icon: Mail,
      color: "hover:text-red-500 hover:border-red-500/50",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fagnernlopes/",
      icon: Linkedin,
      color: "hover:text-blue-500 hover:border-blue-500/50",
    },
    {
      name: "GitHub",
      href: "https://github.com/fagnerlopes",
      icon: Github,
      color: "hover:text-purple-500 hover:border-purple-500/50",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5551994801715",
      icon: MessageCircle,
      color: "hover:text-green-500 hover:border-green-500/50",
    },
  ]

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="container relative mx-auto max-w-5xl flex flex-col items-center justify-center gap-8 px-6 py-20 text-center">
        {/* Avatar with gradient background */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-background">
            <Image
              src="/avatar-perfil.jpeg"
              alt="Fagner Lopes"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-5 max-w-3xl">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Desenvolvedor Full Stack
            </span>
            <VisitorCounter />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-linear-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Fagner Lopes
          </h1>
          
          <TypingAnimation />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {techStack.map((tech) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.name}
                className="group"
                title={tech.name}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-muted">
                  <Icon className={`h-7 w-7 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="icon"
              asChild
              className={`h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>

        {/* Download CV Button */}
        <Button
          asChild
          size="lg"
          className="mt-2 rounded-full px-8 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-purple-500/50"
        >
          <a
            href="/profile.pdf"
            download="Fagner_Lopes_CV.pdf"
            className="flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            <span className="font-semibold">Baixar Currículo</span>
          </a>
        </Button>
      </div>
    </section>
  )
}

