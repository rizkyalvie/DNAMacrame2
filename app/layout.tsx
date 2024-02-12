import './globals.css'
import type { Metadata } from 'next'
import { Anek_Bangla } from 'next/font/google'

const anekBangla = Anek_Bangla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DNA Macrame',
  description: 'Best Custom Handmade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // data-theme="mytheme"
    <html lang="en"> 
      <body className={anekBangla.className}>{children}</body>
    </html>
  )
}
