import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Yarlinson Barranco - Ingeniero de Sistemas',
    template: '%s | Yarlinson Barranco - Portfolio',
  },
  description:
    'Portfolio profesional de Yarlinson Barranco, Ingeniero de Sistemas con experiencia en desarrollo web full-stack con TypeScript, React y Next.js, además de Django, Python y PostgreSQL. Especializado en programación orientada a objetos y desarrollo de APIs REST.',
  keywords: [
    'ingeniero de sistemas',
    'desarrollador',
    'django',
    'python',
    'postgresql',
    'typescript',
    'react',
    'nextjs',
    'full stack',
    'programación orientada a objetos',
    'portfolio',
    'desarrollo web',
    'colombia',
  ],
  authors: [{ name: 'Yarlinson Barranco' }],
  creator: 'Yarlinson Barranco',
  publisher: 'Yarlinson Barranco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-dominio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tu-dominio.com',
    title: 'Yarlinson Barranco - Ingeniero de Sistemas',
    description:
      'Portfolio profesional de Yarlinson Barranco, Ingeniero de Sistemas con experiencia en Django, Python, PostgreSQL y desarrollo web full-stack.',
    siteName: 'Yarlinson Barranco Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yarlinson Barranco - Ingeniero de Sistemas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yarlinson Barranco - Ingeniero de Sistemas',
    description:
      'Portfolio profesional de Yarlinson Barranco, Ingeniero de Sistemas con experiencia en Django, Python, PostgreSQL y desarrollo web full-stack.',
    images: ['/og-image.jpg'],
    creator: '@yarlinson',
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
    google: 'tu-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
