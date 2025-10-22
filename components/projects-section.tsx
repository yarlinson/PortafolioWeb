'use client';

import { useState } from 'react';
import { Code2, ExternalLink, X, Github } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    title: 'Software Educativo de Programación Lineal',
    description:
      'Aplicación web educativa de programación lineal con arquitectura MVC, implementando 5 algoritmos de optimización (Simplex, Dual, Gráfico, Dos Fases, Gran M) utilizando programación orientada a objetos. Características técnicas: eliminación de estado global para concurrencia, validación robusta de formularios, algoritmos endurecidos con manejo de degeneración, renderizado estandarizado de resultados, y configuración optimizada para Django 5. El sistema incluye interfaz responsive, manejo de errores, y visualización dinámica de soluciones matemáticas con tablas de iteración, permitiendo a estudiantes y profesores resolver problemas complejos de optimización lineal con precisión y feedback inmediato.',
    tech: ['Django', 'Python', 'SQLite', 'HTML5/CSS3', 'NumPy', 'PuLP', 'Matplotlib', 'Pillow'],
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
    demo: 'https://pokemon-dashboard-nextjs.vercel.app/',
    year: '2025',
    image: '/project-pokemon-dashboard.png'
  },
  {
    title: 'Sistema de Gestión de Tareas',
    description:
      'Aplicación web full-stack para gestión de tareas que integra una interfaz web moderna con una API REST documentada. Ofrece autenticación de usuarios, gestión completa de tareas (CRUD), marcado de completado, filtrado por estado y búsqueda avanzada con seguridad robusta.',
    tech: ['Django REST Framework', 'Python', 'SQLite', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    link: 'https://github.com/yarlinson/CRUD-GESTIONDETAREAS-DJANGO',
    year: '2025',
    image: '/project-task-management.png'
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <Card 
        className="overflow-hidden hover-scale glass flex flex-col h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
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
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <Badge variant="secondary">{project.year}</Badge>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, i: number) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="mt-auto">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal con detalles del proyecto */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Imagen del proyecto */}
            <div className="space-y-4">
              {project.image && (
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
              )}
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, i: number) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Información del proyecto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Descripción del Proyecto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Año de Desarrollo</h3>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {project.year}
                </Badge>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces del Proyecto</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">GitHub</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Demo Vivo</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
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
      
    </section>
  );
}

