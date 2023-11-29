import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brest Bar',
  description: 'Votre compagnon pour vous mener au lieu de beuveri qui vous sciera le mieux !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
