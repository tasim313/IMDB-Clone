import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This project is practice project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
        {/* Header */}
        <Header></Header>

        {/*Navbar */}

         {/*SearchBox */}
        {children}</body>
    </html>
  )
}
