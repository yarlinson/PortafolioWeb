'use client';

import { useState } from 'react';
import { Code2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Software Educativo de Programación Lineal',
    description:
      'Aplicación web educativa de programación lineal con arquitectura MVC, implementando 5 algoritmos de optimización (Simplex, Dual, Gráfico, Dos Fases, Gran M) utilizando programación orientada a objetos. Características técnicas: eliminación de estado global para concurrencia, validación robusta de formularios, algoritmos endurecidos con manejo de degeneración, renderizado estandarizado de resultados, y configuración optimizada para Django 5. El sistema incluye interfaz responsive, manejo de errores, y visualización dinámica de soluciones matemáticas con tablas de iteración, permitiendo a estudiantes y profesores resolver problemas complejos de optimización lineal con precisión y feedback inmediato.',
    tech: ['Django 5.2', 'Python 3.13', 'SQLite', 'HTML5/CSS3', 'NumPy 2.3', 'PuLP 3.3', 'Matplotlib 3.10', 'Pillow'],
    link: 'https://github.com/yarlinson/ProyectoMetodosLineales',
    year: '2024',
    image: '/project-linear-programming.png'
  },
  {
    title: 'Dashboard Interactivo de Pokémon',
    description:
      'Desarrollé un Dashboard Interactivo de Pokémon, una aplicación web moderna que permite explorar, buscar y gestionar información detallada sobre Pokémon. El sistema se integra con la PokéAPI para obtener datos en tiempo real, ofreciendo una visualización completa de Pokémon con sus tipos, estadísticas, habilidades y características. La aplicación incluye funcionalidades de búsqueda y filtrado avanzado por nombre, tipo y generación, así como ordenamiento dinámico y paginación eficiente. Todo esto se presenta a través de una interfaz de usuario responsiva y dinámica, construida con Next.js y React, estilizada con Tailwind CSS y mejorada con animaciones fluidas de Framer Motion, optimizando el rendimiento con TanStack React Query para una gestión eficiente del estado y caché de datos.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack React Query', 'Framer Motion', 'Axios'],
    link: 'https://github.com/yarlinson/pokemon-dashboard-nextjs',
    year: '2025',
    image: '/project-pokemon-dashboard.png'
  },
  {
    title: 'Sistema de Gestión de Tareas',
    description:
      'Aplicación web full-stack para gestión de tareas que integra una interfaz web moderna con una API REST documentada. Ofrece autenticación de usuarios, gestión completa de tareas (CRUD), marcado de completado, filtrado por estado y búsqueda avanzada con seguridad robusta.',
    tech: ['Django REST Framework', 'Python', 'SQLite', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    link: 'https://github.com/yarlinson/CRUD-GESTIONDETAREAS-DJANGO',
    year: '2025',
    image: '/project-task-management.png'
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="overflow-hidden hover-scale glass flex flex-col h-full">
      {project.image && (
        <div className="relative h-64 w-full flex-shrink-0">
          <Image
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            priority={index < 2}
          />
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <Badge variant="secondary">{project.year}</Badge>
        </div>
        
        <div className="flex-grow flex flex-col">
          <div className="mb-4 flex-grow flex flex-col project-description">
            <div className={`text-muted-foreground leading-relaxed flex-grow ${!isExpanded ? 'line-clamp-5 description-text' : ''}`}>
              {project.description}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 text-sm font-medium mt-2 flex items-center gap-1 transition-colors flex-shrink-0"
            >
              {isExpanded ? (
                <>
                  Ver menos <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Ver más <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-between group p-2 rounded-md hover:bg-accent transition-colors mt-auto"
        >
          Ver en GitHub
          <ExternalLink
            className="h-4 w-4 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </a>
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
      aria-label="Sección de proyectos"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .grid {
          display: grid;
        }
        .grid > * {
          height: 100%;
          min-height: 600px;
        }
        .project-description {
          min-height: 140px;
          display: flex;
          flex-direction: column;
        }
        .project-description .line-clamp-5 {
          min-height: 140px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .description-text {
          height: 140px;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

