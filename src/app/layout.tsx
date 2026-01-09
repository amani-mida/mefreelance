import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Midigitale - Agence Digital | Création de Sites Web, Apps Web & Mobile',
  description: 'Agence digitale spécialisée dans la création de sites web, applications web et applications mobiles. Solutions sur mesure et performantes pour votre transformation digitale.',
  keywords: 'agence digitale, création site web, application web, application mobile, développement web, Next.js, React, agence web',
  icons: {
    icon: [
      { url: '/images/logo/favi-o.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/images/logo/favi-o.png',
    apple: [
      { url: '/images/logo/favi-o.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

