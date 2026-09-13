import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShineU — Influence Marketing OS',
  description: 'Discover creators, manage campaigns, approve content, and measure creator growth.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
