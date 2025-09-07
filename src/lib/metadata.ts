import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Biblioteca Parroquial - Sistema de Gestión',
    template: '%s | Biblioteca Parroquial'
  },
  description: 'Sistema de gestión integral para biblioteca parroquial. Catálogo digital de textos religiosos, literatura y recursos educativos. Acceso público y administración completa.',
  keywords: [
    'biblioteca',
    'parroquial',
    'iglesia',
    'libros religiosos',
    'catálogo digital',
    'gestión bibliotecaria',
    'textos sagrados',
    'literatura cristiana',
    'recursos educativos',
    'sistema biblioteca',
    'gestión libros',
    'catálogo online',
    'biblioteca digital',
    'recursos parroquiales'
  ],
  authors: [{ name: 'Sistema Biblioteca Parroquial' }],
  creator: 'Sistema Biblioteca Parroquial',
  publisher: 'Parroquia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://biblioteca-parroquial.local'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Biblioteca Parroquial - Sistema de Gestión',
    description: 'Sistema de gestión integral para biblioteca parroquial. Catálogo digital de textos religiosos y literatura.',
    url: 'https://biblioteca-parroquial.local',
    siteName: 'Biblioteca Parroquial',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Biblioteca Parroquial - Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biblioteca Parroquial - Sistema de Gestión',
    description: 'Sistema de gestión integral para biblioteca parroquial. Catálogo digital de textos religiosos y literatura.',
    images: ['/icon-512x512.png'],
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
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'education',
}

export function generatePageMetadata(
  title: string,
  description?: string,
  keywords?: string[]
): Metadata {
  return {
    title,
    description: description || defaultMetadata.description || '',
    keywords: keywords ? [...(defaultMetadata.keywords || []), ...keywords] : defaultMetadata.keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description: description || defaultMetadata.description || '',
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description: description || defaultMetadata.description || '',
    },
  }
}
