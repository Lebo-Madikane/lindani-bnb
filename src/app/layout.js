import '../styles/globals.scss';
import { Inter, Playfair_Display } from 'next/font/google';
import GoogleTagManager from '../components/Analytics/GoogleTagManager'
import GoogleTagManagerNoScript from '../components/Analytics/GoogleTagManagerNoScript'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });


export const metadata = {
  title: 'Lindani BnB - Luxury Accommodation',
  description: 'Experience comfort and luxury at Lindani BnB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager - Head */}
        <GoogleTagManager />
      </head>
      <body>
        {/* Google Tag Manager - Body */}
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  )
}
