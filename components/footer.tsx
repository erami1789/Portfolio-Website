export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-blue-200 dark:border-blue-800">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© {currentYear} Emiliano Ramirez. All rights reserved.</p>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">Built with Next.js and shadcn/ui</p>
      </div>
    </footer>
  )
}

