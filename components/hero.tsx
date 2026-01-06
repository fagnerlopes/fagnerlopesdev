import Image from "next/image"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
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
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
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
          <div className="inline-block">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Desenvolvedor Full Stack
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Fagner Lopes
          </h1>
          
          <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-muted-foreground md:text-xl">
            Especialista em desenvolvimento web com experiência em{" "}
            <span className="font-semibold text-foreground">Laravel</span>,{" "}
            <span className="font-semibold text-foreground">Vue.js</span>,{" "}
            <span className="font-semibold text-foreground">React</span>{" "}
            e tecnologias modernas. 
          </p>
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
      </div>
    </section>
  )
}

