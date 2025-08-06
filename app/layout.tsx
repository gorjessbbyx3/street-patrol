import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Street Patrol - Community Safety & Outreach',
  description: 'Empowering communities through non-enforcement safety patrols and compassionate outreach programs.',
  keywords: 'community safety, street patrol, urban outreach, crime prevention, community engagement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
