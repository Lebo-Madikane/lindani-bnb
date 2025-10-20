import '../styles/globals.scss';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });


export const metadata = {
  title: 'Lindani BnB - Luxury Accommodation',
  description: 'Experience comfort and luxury at Lindani BnB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
