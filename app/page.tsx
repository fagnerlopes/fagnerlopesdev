import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 -z-10" />
      
      {/* Animated circles */}
      <div className="fixed top-20 left-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-20 right-10 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl animate-pulse delay-1000 -z-10" />
      
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}
