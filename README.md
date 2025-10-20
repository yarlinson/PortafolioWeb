# 🚀 Portfolio Profesional - Yarlinson Barranco

[![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Portfolio profesional desarrollado con Next.js 13, TypeScript y Tailwind CSS, diseñado para mostrar mis proyectos, experiencia y habilidades como Ingeniero de Sistemas.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Carga rápida con Next.js 13 y optimizaciones de imagen
- 🌙 **Tema Oscuro/Claro**: Soporte para modo oscuro y claro
- 🔍 **SEO Optimizado**: Meta tags, Open Graph y Twitter Cards
- ♿ **Accesibilidad**: Cumple con estándares de accesibilidad web
- 🚀 **Deploy Ready**: Configurado para despliegue en Vercel

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 13.5.1** - Framework de React con App Router
- **TypeScript 5.2.2** - Tipado estático para JavaScript
- **React 18.2.0** - Biblioteca de interfaz de usuario
- **Tailwind CSS 3.3.3** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos y ligeros

### UI Components
- **Radix UI** - Componentes accesibles y personalizables
- **shadcn/ui** - Sistema de componentes moderno
- **Framer Motion** - Animaciones fluidas

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
Portafolio/
├── app/                    # App Router de Next.js 13
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizables
│   ├── hero-section.tsx  # Sección de presentación
│   ├── about-section.tsx # Sección sobre mí
│   ├── projects-section.tsx # Sección de proyectos
│   ├── experience-section.tsx # Sección de experiencia
│   └── contact-section.tsx # Sección de contacto
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos
│   ├── yarlinson.png    # Foto de perfil
│   └── project-*.png    # Imágenes de proyectos
├── hooks/               # Custom hooks
└── styles/              # Archivos de estilos
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- pnpm (recomendado) o npm

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/yarlinson/portafolio.git
cd portafolio
```

2. **Instalar dependencias**
```bash
pnpm install
# o
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
pnpm dev
# o
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo

# Producción
pnpm build        # Construye la aplicación para producción
pnpm start        # Inicia el servidor de producción

# Calidad de código
pnpm lint         # Ejecuta ESLint
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Datos personales**: Edita `app/layout.tsx` para cambiar metadata
2. **Sección Hero**: Modifica `components/hero-section.tsx`
3. **Sobre mí**: Actualiza `components/about-section.tsx`
4. **Proyectos**: Edita el array `projects` en `components/projects-section.tsx`
5. **Experiencia**: Modifica `components/experience-section.tsx`
6. **Contacto**: Actualiza `components/contact-section.tsx`

### Cambiar Colores y Temas

Edita `tailwind.config.ts` para personalizar:
- Colores primarios
- Tipografías
- Espaciados
- Animaciones

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `components/`
2. Importa y usa en `app/page.tsx`
3. Agrega enlaces en `components/navigation.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El despliegue será automático en cada push

### Otras Plataformas

- **Netlify**: Compatible con Next.js
- **Railway**: Soporte nativo para Next.js
- **DigitalOcean**: Con Docker

## 📱 Características Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Grid Responsive**: Se adapta a diferentes tamaños
- **Imágenes Optimizadas**: Next.js Image component

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea `.env.local` para configuraciones locales:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Optimizaciones

- **Image Optimization**: Next.js optimiza automáticamente las imágenes
- **Code Splitting**: Carga bajo demanda de componentes
- **Bundle Analysis**: `pnpm build` genera reportes de bundle

## 📊 SEO y Performance

- ✅ **Meta Tags** optimizados
- ✅ **Open Graph** para redes sociales
- ✅ **Twitter Cards** para Twitter
- ✅ **Sitemap.xml** automático
- ✅ **Robots.txt** configurado
- ✅ **Lighthouse Score** 90+

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Yarlinson Barranco** - Ingeniero de Sistemas

- 📧 Email: [yarlinson0@gmail.com](mailto:yarlinson0@gmail.com)
- 💼 LinkedIn: [yarlinson-barranco-988a50301](https://www.linkedin.com/in/yarlinson-barranco-988a50301/)
- 🐙 GitHub: [@yarlinson](https://github.com/yarlinson)
- 📱 WhatsApp: [+57 3204991236](https://wa.me/573204991236)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
