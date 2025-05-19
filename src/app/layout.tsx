import Head from 'next/head'
import './globals.css'

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <Head>
        <title>Travel Buddies Midnapore</title>
        <meta name="description" content="Travel Buddies Midnapore - Join group trips or plan your own adventure with our travel community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="bg-gray-900 text-white">
        <div className="min-h-screen bg-gray-900 text-white">
          {children}
        </div>
      </body>
    </html>
  )
}
