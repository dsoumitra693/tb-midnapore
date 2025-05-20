import './globals.css'

export const metadata = {
  title: 'Travel Buddies Midnapore',
  description: 'Travel Buddies Midnapore - Join group trips or plan your own adventure with our travel community',
  keywords: [
    'Travel Buddies',
    'Midnapore',
    'Group Trips',
    'Adventure',
    'Travel Community',
    'Tours',
    'India',
    'Travel Planning'
  ],
  authors: [{ name: 'Travel Buddies Midnapore', url: 'https://travelbuddiesmidnapore.in' }],
  creator: 'Travel Buddies Midnapore',
  openGraph: {
    title: 'Travel Buddies Midnapore',
    description: 'Join group trips or plan your own adventure with our travel community.',
    url: 'https://travelbuddiesmidnapore.in',
    siteName: 'Travel Buddies Midnapore',
    images: [
      {
        url: 'https://travelbuddiesmidnapore.in/team.jpeg',
        width: 1200,
        height: 630,
        alt: 'Travel Buddies Midnapore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Buddies Midnapore',
    description: 'Join group trips or plan your own adventure with our travel community.',
    images: ['https://travelbuddiesmidnapore.in/team.jpeg'],
    creator: '@TravelBuddiesMidnapore',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="min-h-screen bg-gray-900 text-white">
          {children}
        </div>
      </body>
    </html>
  )
}
