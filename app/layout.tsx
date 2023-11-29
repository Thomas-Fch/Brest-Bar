import type { Metadata } from 'next';
import '../sass/style.scss';
import { Inter} from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
})

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
