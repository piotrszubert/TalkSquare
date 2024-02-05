import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container max-w-7xl border-x min-h-svh">
      <nav className="flex justify-end border-b py-2">
        <ThemeToggle />
      </nav>
      <div className="py-16 max-w-3xl space-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-muted-foreground leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil
          necessitatibus voluptatum earum nobis cumque! Accusamus eveniet
          corporis dolorem fugiat.
        </p>
        <div className="gap-3 flex">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </main>
  )
}
