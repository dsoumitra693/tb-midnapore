"use client"

import Head from 'next/head'
import Navbar from '@/components/navbar'
import { usePathname } from "next/navigation";
import './globals.css'
import Footer from '@/components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <Head>
        <title>Travel Buddies Midnapore</title>
        <meta name="description" content="Travel Buddies Midnapore - Join group trips or plan your own adventure with our travel community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="bg-gray-900 text-white">
        <div className="min-h-screen bg-gray-900 text-white">
          {pathname.startsWith('/studio') ? (<main>
            {children}
          </main>) :
            (<>
            <Navbar />
              <main>{children}</main>
              <Footer />
            </>)}
        </div>
      </body>
    </html>
  )
}
