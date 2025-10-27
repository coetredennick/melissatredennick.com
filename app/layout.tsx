import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Melissa Tredennick Counseling PLLC',
  description: 'Professional counseling services in Houston, TX. Supporting caregivers and individuals navigating medical trauma through therapy, life coaching, and EMDR.',
  keywords: ['counseling Houston', 'therapy Houston', 'medical trauma', 'caregiver support', 'EMDR therapy', 'life coaching'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
