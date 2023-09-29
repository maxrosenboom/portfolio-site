import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Rosenboom - Portfolio',
  description: 'Max Rosenboom`s portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head> 
        <link rel="shortcut icon" type="image/x-icon" href="https://maxrosenboom.github.io/portfolio-site/favicon.ico"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
