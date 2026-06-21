import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Playfair_Display, Great_Vibes } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Veloura Desserts & Cakes | Sweet Moments Made Beautiful',
  description: 'Premium homemade cakes, signature fudge brownies, cookie tins, cheesecakes, and custom desserts. Baked fresh with love in Anna Nagar, Chennai.',
  keywords: ['cakes', 'brownies', 'fudge brownies', 'cookie tins', 'cheesecakes', 'custom cakes', 'eggless cakes', 'bakery Anna Nagar', 'Chennai', 'Veloura Desserts'],
  authors: [{ name: 'Veloura Desserts' }],
  creator: 'Veloura Desserts',
  publisher: 'Veloura Desserts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://velouracakes.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Veloura Desserts & Cakes | Sweet Moments Made Beautiful',
    description: 'Premium homemade cakes, signature fudge brownies, cookie tins, cheesecakes, and custom desserts in Anna Nagar, Chennai.',
    siteName: 'Veloura Desserts',
    images: [
      {
        url: 'https://images.pexels.com/photos/2915262/pexels-photo-2915262.jpeg',
        width: 1200,
        height: 630,
        alt: 'Veloura Desserts - Premium Homemade Cakes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veloura Desserts & Cakes | Sweet Moments Made Beautiful',
    description: 'Premium homemade cakes, signature fudge brownies, cookie tins, cheesecakes, and custom desserts in Anna Nagar, Chennai.',
    images: ['https://images.pexels.com/photos/2915262/pexels-photo-2915262.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Providers } from './Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
