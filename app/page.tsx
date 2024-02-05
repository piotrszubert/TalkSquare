import { Hero } from "@/components/hero"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="container max-w-7xl border-x min-h-svh">
      <nav className="flex justify-end border-b py-2">
        <ThemeToggle />
      </nav>
      <Hero />
    </main>
  )
}
