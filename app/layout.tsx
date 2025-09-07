import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thorell.fit | Pure Life Now',
  description: 'Membership, wellness programs, and secure intake forms for Pure Life Now LLC.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/10">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-bold">Thorell.fit</Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/#features">Features</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/forms/intake">Patient Intake</Link>
              <Link href="/forms/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10">
          <div className="container py-8 text-sm text-slate-400">
            © {new Date().getFullYear()} Pure Life Now LLC · 7901 4th St N #7947 · St. Petersburg, FL 33702
          </div>
        </footer>
      </body>
    </html>
  )
}
