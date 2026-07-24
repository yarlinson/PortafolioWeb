'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: 'Software Educativo de Programación Lineal',
    description:
      'Aplicación web educativa de programación lineal con arquitectura MVC, implementando 5 algoritmos de optimización (Simplex, Dual, Gráfico, Dos Fases, Gran M) utilizando programación orientada a objetos. Características técnicas: eliminación de estado global para concurrencia, validación robusta de formularios, algoritmos endurecidos con manejo de degeneración, renderizado estandarizado de resultados, y configuración optimizada para Django 5. El sistema incluye interfaz responsive, manejo de errores, y visualización dinámica de soluciones matemáticas con tablas de iteración, permitiendo a estudiantes y profesores resolver problemas complejos de optimización lineal con precisión y feedback inmediato.',
    tech: [
      'Django',
      'Python',
      'SQLite',
      'HTML5/CSS3',
      'NumPy',
      'PuLP',
      'Matplotlib',
      'Pillow',
    ],
    link: 'https://github.com/yarlinson/ProyectoMetodosLineales',
    year: '2024',
    image: '/project-linear-programming.png',
    highlights: [
      '5 algoritmos de optimización (Simplex, Dual, Gráfico, Dos Fases, Gran M)',
      'Arquitectura MVC con programación orientada a objetos',
      'Visualización dinámica de soluciones matemáticas con tablas de iteración',
      'Interfaz responsive con validación robusta de formularios',
    ],
  },
  {
    title: 'Dashboard Interactivo de Pokémon',
    description:
      'Desarrollé un Dashboard Interactivo de Pokémon, una aplicación web moderna que permite explorar, buscar y gestionar información detallada sobre Pokémon. El sistema se integra con la PokéAPI para obtener datos en tiempo real, ofreciendo una visualización completa de Pokémon con sus tipos, estadísticas, habilidades y características. La aplicación incluye funcionalidades de búsqueda y filtrado avanzado por nombre, tipo y generación, así como ordenamiento dinámico y paginación eficiente. Todo esto se presenta a través de una interfaz de usuario responsiva y dinámica, construida con Next.js y React, estilizada con Tailwind CSS y mejorada con animaciones fluidas de Framer Motion, optimizando el rendimiento con TanStack React Query para una gestión eficiente del estado y caché de datos.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'TanStack React Query',
      'Framer Motion',
      'Axios',
    ],
    link: 'https://github.com/yarlinson/pokemon-dashboard-nextjs',
    demo: 'https://pokemon-dashboard-nextjs.vercel.app/',
    year: '2025',
    image: '/project-pokemon-dashboard.png',
    highlights: [
      'Integración con PokéAPI en tiempo real',
      'Búsqueda y filtrado avanzado por nombre, tipo y generación',
      'Animaciones fluidas con Framer Motion',
      'Gestión eficiente del estado con TanStack React Query',
    ],
  },
  {
    title: 'Sistema de Gestión de Tareas',
    description:
      'Aplicación web full-stack para gestión de tareas que integra una interfaz web moderna con una API REST documentada. Ofrece autenticación de usuarios, gestión completa de tareas (CRUD), marcado de completado, filtrado por estado y búsqueda avanzada con seguridad robusta.',
    tech: [
      'Django REST Framework',
      'Python',
      'SQLite',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'JavaScript',
    ],
    link: 'https://github.com/yarlinson/CRUD-GESTIONDETAREAS-DJANGO',
    year: '2024',
    image: '/project-task-management.png',
    highlights: [
      'CRUD completo con API REST documentada',
      'Autenticación por tokens y protección CSRF',
      'Filtrado por estado y búsqueda avanzada',
      'Interfaz responsive con Bootstrap 5',
    ],
  },
  {
    title: 'Ambrosia — Plataforma de Alimentación para Disfagia',
    description:
      'Plataforma web sobre disfagia con landing informativa, catálogo IDDSI, videorecetas, sistema de suscripción con planes y autenticación completa vía Supabase Auth. Simulación interactiva de pagos (Tarjeta, PSE, PayPal, Addi), formulario de contacto con Nodemailer, perfil de membresía y biblioteca PDF. Diseño 100% responsive con Tailwind CSS v4 sin librerías UI externas.',
    tech: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Supabase',
      'Tailwind CSS v4',
      'Framer Motion',
      'Nodemailer',
    ],
    link: '',
    year: '2026',
    demo: 'https://ambrosia-nextjs.vercel.app/',
    logo: '/LogoDeAmbrosia.png',
    image: '/project-ambrosia.png',
    highlights: [
      'Catálogo IDDSI y videorecetas para disfagia',
      'Simulación interactiva de pagos (Tarjeta, PSE, PayPal, Addi)',
      'Autenticación completa vía Supabase Auth',
      'Tailwind CSS v4 sin librerías UI externas',
    ],
  },
];

function TimelineCard({
  project,
  onClick,
}: {
  project: (typeof projects)[number];
  onClick: () => void;
}) {
  return (
    <Card
      className="overflow-hidden hover-scale glass cursor-pointer group/card relative"
      onClick={onClick}
    >
      <Badge className="absolute -top-3 -right-3 z-10 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full shadow-lg shadow-primary/25 border-2 border-background">
        {project.year}
      </Badge>

      {project.image && (
        <div className="relative h-48 w-full overflow-hidden border-b border-primary/20">
          <Image
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
            sizes="(max-width: 768px) 100vw, 45vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-primary/15" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover/card:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 4).map((tech, i) => (
            <Badge key={i} variant="outline" className="text-[10px] px-2 py-0">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-[10px] px-2 py-0">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>
    </Card>
  );
}

function TimelineItem({
  project,
  index,
  onOpen,
}: {
  project: (typeof projects)[number];
  index: number;
  onOpen: () => void;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: Math.min(index * 0.1, 0.3),
      }}
      className="relative mb-12 md:mb-20 last:mb-0"
    >
        {/* Dot + Connectors */}
        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 z-10 top-0 group/dot">
          {/* B: Connector line LEFT (desktop, even items → left card) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-full hidden md:block w-[45px] h-px bg-gradient-to-l from-primary/40 to-transparent" />

          {/* C: Dot with pulse on hover */}
          <div className="w-[50px] h-[50px] rounded-full bg-background border-[3px] border-primary flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover/dot:scale-110 group-hover/dot:shadow-[0_0_35px_rgba(16,185,129,0.5)]">
            <span className="text-[11px] font-extrabold text-primary">
              {project.year}
            </span>
          </div>

          {/* B: Connector line RIGHT (desktop odd items, mobile always) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-full block w-[45px] md:w-[45px] h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* Mobile layout */}
        <div className="md:hidden ml-[80px]">
          <TimelineCard
            project={project}
            onClick={onOpen}
          />
        </div>

        {/* Desktop layout: alternating */}
        <div className="hidden md:block">
          {isLeft ? (
            <div className="flex items-start w-full">
              <div className="w-1/2 pr-12">
                <TimelineCard
                  project={project}
                  onClick={onOpen}
                />
              </div>
              <div className="w-1/2 pl-12" />
            </div>
          ) : (
            <div className="flex items-start w-full">
              <div className="w-1/2 pr-12" />
              <div className="w-1/2 pl-12">
                <TimelineCard
                  project={project}
                  onClick={onOpen}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
  );
}

function ProjectModal({
  project,
  open,
  onOpenChange,
  currentIndex,
  total,
  onPrev,
  onNext,
}: {
  project: (typeof projects)[number];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!open || total <= 1) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, total, onPrev, onNext]);

  const hasLogo = 'logo' in project && project.logo;
  const slides = hasLogo ? [project.image, project.logo] : [project.image];
  const hasHighlights = 'highlights' in project && project.highlights;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            {total > 1 && (
              <button
                onClick={onPrev}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors shrink-0"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            <DialogTitle className="text-xl md:text-2xl font-bold flex-1">
              {project.title}
            </DialogTitle>
            <Badge variant="secondary" className="text-sm px-3 py-0.5 whitespace-nowrap">
              {project.year}
            </Badge>
            {total > 1 && (
              <button
                onClick={onNext}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors shrink-0"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
          {total > 1 && (
            <p className="text-xs text-muted-foreground mt-1 text-center">
              Proyecto {currentIndex + 1} de {total} &mdash; usa las teclas ← →
            </p>
          )}
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-4">
            {hasLogo ? (
              <div className="relative">
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                  <div className="flex">
                    <div className="flex-[0_0_100%] min-w-0">
                      <div className="relative h-80 w-full rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`Captura de ${project.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={90}
                        />
                      </div>
                    </div>
                    <div className="flex-[0_0_100%] min-w-0">
                      <div className="relative h-80 w-full rounded-lg overflow-hidden bg-white/5 border border-border flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`Logo de ${project.title}`}
                          fill
                          className="object-contain p-12"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background hover:border-primary transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background hover:border-primary transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="flex justify-center gap-2 mt-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => emblaApi?.scrollTo(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === selectedIndex
                          ? 'bg-primary w-6'
                          : 'bg-primary/30 hover:bg-primary/60'
                      }`}
                      aria-label={`Ir a imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              project.image && (
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Imagen de ${project.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
              )
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {hasHighlights && project.highlights && (
              <div>
                <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Destacados
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1 text-primary shrink-0 text-xs">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(project.link || ('demo' in project && project.demo)) && (
              <div>
                <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Enlaces
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gray-800/80 text-white hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                      <ExternalLink className="h-3 w-3 text-gray-400" />
                    </a>
                  )}
                  {'demo' in project && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors border border-primary/30"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo Vivo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 65%', 'end 25%'],
  });

  const sortedProjects = [...projects].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden"
      aria-label="Sección de proyectos"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un recorrido por los proyectos en los que he trabajado
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* F: Dashed background line */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-px top-4 bottom-4 border-l-2 border-dashed border-primary/15" />

          {/* E: Animated solid progress line */}
          <motion.div
            className="absolute left-[39px] md:left-1/2 md:-translate-x-px top-4 bottom-4 w-[3px] bg-gradient-to-b from-primary via-primary to-primary/60 origin-top rounded-full"
            style={{ scaleY: scrollYProgress }}
          />

          {sortedProjects.map((project, index) => (
            <TimelineItem
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && sortedProjects[activeIndex] && (
        <ProjectModal
          project={sortedProjects[activeIndex]}
          open={activeIndex !== null}
          onOpenChange={(open) => { if (!open) setActiveIndex(null); }}
          currentIndex={activeIndex}
          total={sortedProjects.length}
          onPrev={() =>
            setActiveIndex(
              activeIndex > 0 ? activeIndex - 1 : sortedProjects.length - 1
            )
          }
          onNext={() =>
            setActiveIndex(
              activeIndex < sortedProjects.length - 1 ? activeIndex + 1 : 0
            )
          }
        />
      )}
    </section>
  );
}
