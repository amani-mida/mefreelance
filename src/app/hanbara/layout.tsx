import type { Metadata } from 'next'
import Navbar from '@/components/hanbara/Navbar'
import Footer from '@/components/hanbara/Footer'

export const metadata: Metadata = {
  title: 'Hanbara - Avec vous dans le travail | Plateforme Agricole',
  description:
    'Hanbara est une solution d\'assistance qui apporte sécurité et garantie de confiance entre les différents acteurs du secteur agricole. Connectez exploitants, travailleurs et acheteurs.',
  keywords:
    'hanbara, agriculture, jobs agricoles, vente produits agricoles, exploitants, travailleurs, acheteurs, Côte d\'Ivoire',
}

export default function HanbaraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

