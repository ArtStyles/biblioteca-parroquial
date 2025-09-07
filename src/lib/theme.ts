// Configuración del tema de la aplicación
export const themeConfig = {
  name: 'Biblioteca Parroquial',
  shortName: 'BP',
  description: 'Sistema de gestión de biblioteca parroquial',
  
  // Colores principales
  colors: {
    primary: '#5bbad5',
    secondary: '#2c5aa0',
    accent: '#f4a261',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    muted: '#6c757d',
  },
  
  // Colores del tema
  theme: {
    light: {
      background: '#ffffff',
      foreground: '#0f172a',
      card: '#ffffff',
      'card-foreground': '#0f172a',
      popover: '#ffffff',
      'popover-foreground': '#0f172a',
      primary: '#5bbad5',
      'primary-foreground': '#ffffff',
      secondary: '#f1f5f9',
      'secondary-foreground': '#0f172a',
      muted: '#f1f5f9',
      'muted-foreground': '#64748b',
      accent: '#f1f5f9',
      'accent-foreground': '#0f172a',
      destructive: '#ef4444',
      'destructive-foreground': '#ffffff',
      border: '#e2e8f0',
      input: '#e2e8f0',
      ring: '#5bbad5',
    },
    dark: {
      background: '#0f172a',
      foreground: '#f8fafc',
      card: '#1e293b',
      'card-foreground': '#f8fafc',
      popover: '#1e293b',
      'popover-foreground': '#f8fafc',
      primary: '#5bbad5',
      'primary-foreground': '#ffffff',
      secondary: '#334155',
      'secondary-foreground': '#f8fafc',
      muted: '#334155',
      'muted-foreground': '#94a3b8',
      accent: '#334155',
      'accent-foreground': '#f8fafc',
      destructive: '#ef4444',
      'destructive-foreground': '#ffffff',
      border: '#334155',
      input: '#334155',
      ring: '#5bbad5',
    },
  },
  
  // Configuración de iconos
  icons: {
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
    maskIcon: '/safari-pinned-tab.svg',
    maskIconColor: '#5bbad5',
  },
  
  // Configuración de la aplicación
  app: {
    name: 'Biblioteca Parroquial',
    shortName: 'BP',
    description: 'Sistema de gestión de biblioteca parroquial',
    version: '1.0.0',
    author: 'Sistema Biblioteca Parroquial',
    url: 'https://biblioteca-parroquial.local',
    locale: 'es-ES',
    timezone: 'America/Mexico_City',
  },
  
  // Configuración de SEO
  seo: {
    title: 'Biblioteca Parroquial - Sistema de Gestión',
    description: 'Sistema de gestión integral para biblioteca parroquial. Catálogo digital de textos religiosos, literatura y recursos educativos.',
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
    ],
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: 'https://biblioteca-parroquial.local',
      siteName: 'Biblioteca Parroquial',
      title: 'Biblioteca Parroquial - Sistema de Gestión',
      description: 'Sistema de gestión integral para biblioteca parroquial. Catálogo digital de textos religiosos y literatura.',
      images: [
        {
          url: '/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'Biblioteca Parroquial - Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Biblioteca Parroquial - Sistema de Gestión',
      description: 'Sistema de gestión integral para biblioteca parroquial. Catálogo digital de textos religiosos y literatura.',
      images: ['/icon-512x512.png'],
    },
  },
}
