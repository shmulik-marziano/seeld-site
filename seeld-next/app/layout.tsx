import type { Metadata } from 'next'
import { Assistant, Heebo } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SeeLD Finance & Insurance | ai PowerD By UMN',
    template: '%s | SeeLD Finance & Insurance',
  },
  description:
    'סוכנות פיננסים וביטוח מבוססת AI. ייעוץ פנסיוני, תכנון פרישה, ביטוחים ועוד. מומחיות אנושית עם כוח הבינה המלאכותית.',
  keywords: [
    'ייעוץ פנסיוני',
    'תכנון פרישה',
    'ביטוח חיים',
    'סוכן ביטוח',
    'תכנון פיננסי',
    'AI',
    'בינה מלאכותית',
    'SeelD',
  ],
  authors: [{ name: 'Shmulik Marziano' }],
  creator: 'SeeLD Finance & Insurance',
  metadataBase: new URL('https://seeld.co.il'),
  alternates: {
    canonical: '/',
    languages: {
      'he-IL': '/he',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://seeld.co.il',
    siteName: 'SeeLD Finance & Insurance',
    title: 'SeeLD Finance & Insurance | ai PowerD By UMN',
    description: 'העתיד של הייעוץ הפיננסי כבר כאן - מבוסס בינה מלאכותית',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SeeLD Finance & Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SeeLD Finance & Insurance',
    description: 'העתיד של הייעוץ הפיננסי כבר כאן',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${heebo.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
