import React from 'react'
import { Inter } from 'next/font/google'

import { ReduxProvider } from '@/redux/provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next + Redux + Zustand',
  description: 'Estudos sobre essas tecnologias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
