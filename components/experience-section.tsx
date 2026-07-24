'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Project = {
  name: string;
  client?: string;
  website?: string;
  bullets: string[];
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description?: string;
  projects?: Project[];
  technologies: string[];
  website?: string;
  certificate?: string;
  logo?: string;
  logoBg?: string;
};

const experience: Experience[] = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Enciso Systems',
    period: '03/2025 - 07/2026',
    technologies: [
      'Django',
      'Django REST Framework',
      'Microservicios',
      'PostgreSQL',
      'PostGIS',
      'GeoDjango',
      'Docker',
      'Docker Compose',
      'Makefile',
      'Next.js',
      'TypeScript',
      'Leaflet',
      'Solidity',
      'GeoServer',
      'GitHub Actions',
      'DigitalOcean',
    ],
    certificate: '/COR26008_signed.pdf',
    logo: '/logoEncisoSystem.png',
    logoBg: 'bg-emerald-500/15',
    projects: [
      {
        name: 'Climate Investment Project Pipeline — Climate FIRST (climatefirstproject.org)',
        client: 'Global Green Growth Institute (GGGI) / CCDA (AUD 20M)',
        website: 'https://climatefirstproject.org/',
        bullets: [
          'Diseñé y desarrollé de forma integral una arquitectura de microservicios con Django REST Framework: proposals-projects-users (usuarios, propuestas, portafolios y reportes), document-management (trazabilidad y versionado seguro de archivos) y notifications (notificaciones in-app y correo SMTP).',
          'Construí y aseguré APIs RESTful, integré microservicios mediante clientes HTTP y automaticé seeds y migraciones para datos reales y de demostración (PNG).',
          'Construí el frontend de la plataforma en Next.js y TypeScript con autenticación, dashboards con métricas y gráficos, formularios con filtros avanzados y visualización geoespacial con Leaflet (LocationMapViewer, PolygonBuilder).',
          'Orquesté el ecosistema completo con Docker Compose y Makefile para entornos locales reproducibles y flujos de CI/CD con GitHub Actions.',
        ],
      },
      {
        name: 'BeanChain — Plataforma de Trazabilidad de Cacao (beanchain.co)',
        client: '',
        website: 'https://beanchain.co/',
        bullets: [
          'Desarrollo end-to-end de plataforma web con Django y DRF, implementando APIs RESTful con serializers diferenciados para lectura/escritura.',
          'Arquitectura geoespacial con GeoDjango y PostGIS: gestión de fincas con polígonos, cálculo automático de hectáreas y seguimiento de actores de la cadena de suministro.',
          'Integración de contratos inteligentes en Solidity (Ethereum Sepolia) para registro inmutable en blockchain de lotes, transacciones y envíos, con trazabilidad pública por QR y verificación on-chain.',
          'Monitoreo satelital de deforestación con Planet/Sentinel-2 vía GeoServer WMS y reportes PDF de cumplimiento EU 2023/1115 (EUDR).',
          'Orquesté DevOps completo con Docker Compose (Django+Gunicorn, PostGIS, GeoServer WMS, Hardhat Node), CI/CD con GitHub Actions, despliegue en DigitalOcean, internacionalización en 4 idiomas (ES/EN/DE/ZH) y perfilamiento científico (análisis de suelos, microbiomas 16S/ITS y perfiles sensoriales con Chart.js).',
        ],
      },
    ],
  },
  {
    role: 'Desarrollador Web',
    company: 'Enciso Systems (ESO)',
    period: '12/2025 - 07/2026',
    description:
      'Soporte y mantenimiento de los portales web supernova.eso.org y eso.org mediante sistema de tickets, resolviendo incidencias de frontend, contenido y permisos de edición. Integración de pasarelas de pago (PayPal Smart Buttons, Google Pay, Apple Pay) en ESO Online Shop con backend Django. Desarrollo de funcionalidades interactivas (ELT West Camera) y soporte general de la plataforma Djangoplicity.',
    technologies: [
      'Django',
      'Djangoplicity',
      'PayPal Smart Buttons',
      'Google Pay',
      'Apple Pay',
      'Soporte Técnico',
      'Sistema de Tickets',
    ],
    website: 'https://supernova.eso.org/',
    logo: '/esoSuperNova-logo-blue.jpg',
    logoBg: 'bg-sky-500/15',
  },
  {
    role: 'Monitor de Soporte Técnico',
    company: 'Universidad de los Llanos - IDEAD',
    period: '02/2025 - 06/2026',
    description:
      'Brindé atención especializada a solicitudes de estudiantes y soporte técnico integral en la plataforma virtual de cursos Moodle. Gestioné incidentes, configuré aulas virtuales, desarrollé y subí materiales educativos digitales, y ofrecí asistencia personalizada a usuarios del campus virtual para optimizar su experiencia de aprendizaje en línea.',
    technologies: [
      'Moodle',
      'Soporte Técnico',
      'Gestión de Incidentes',
      'Materiales Educativos',
    ],
    logo: '/logounillanos.png',
    logoBg: 'bg-amber-500/15',
  },
];

const dotColors = [
  'border-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.35)]',
  'border-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.35)]',
  'border-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.35)]',
];

const MAX_VISIBLE_TECHS = 6;

function CollapsibleProject({
  project,
  defaultOpen = false,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start gap-2 w-full text-left group/proj"
      >
        <span className="mt-0.5 shrink-0">
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-primary transition-transform" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover/proj:text-primary transition-colors" />
          )}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-foreground group-hover/proj:text-primary transition-colors">
              {project.name}
            </h4>
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 text-muted-foreground hover:text-blue-400 transition-colors"
                title="Ver proyecto"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          {project.client && (
            <p className="text-xs text-muted-foreground">
              Cliente: {project.client}
            </p>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden mt-2 ml-6 space-y-1"
          >
            {project.bullets.map((bullet, bi) => (
              <li
                key={bi}
                className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                {bullet}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function TechBadges({ technologies }: { technologies: string[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? technologies : technologies.slice(0, MAX_VISIBLE_TECHS);
  const hiddenCount = technologies.length - MAX_VISIBLE_TECHS;

  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((tech, i) => (
        <Badge key={i} variant="outline" className="text-[10px] px-2 py-0">
          {tech}
        </Badge>
      ))}
      {!showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(true)}
          className="text-[10px] px-2 py-0 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
        >
          +{hiddenCount} más
        </button>
      )}
      {showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(false)}
          className="text-[10px] px-2 py-0 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
        >
          Mostrar menos
        </button>
      )}
    </div>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 65%', 'end 25%'],
  });

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Sección de experiencia"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiencia <span className="gradient-text">Laboral</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[18px] md:left-[32px] top-4 bottom-4 border-l-2 border-dashed border-primary/15" />

          <motion.div
            className="absolute left-[18px] md:left-[32px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-primary via-primary to-primary/60 origin-top rounded-full"
            style={{ scaleY: scrollYProgress }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: Math.min(index * 0.12, 0.3),
              }}
              className="relative mb-12 md:mb-16 last:mb-0"
            >
              <div className="absolute left-[7px] md:left-[15px] z-10 top-1">
                <div
                  className={`w-[24px] h-[24px] md:w-[34px] md:h-[34px] rounded-full bg-background border-[3px] ${dotColors[index]} transition-transform duration-300 hover:scale-125`}
                />
              </div>

              <div className="absolute left-[46px] md:left-[64px] z-10 -top-1 flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="text-[11px] px-2.5 py-0.5 whitespace-nowrap font-medium"
                >
                  {exp.period}
                </Badge>
              </div>

              <div className="ml-12 md:ml-24 pt-8">
                <Card className="p-5 md:p-6 bg-card/60 border border-border/30 hover:border-border/60 transition-colors">
                  <div className="flex items-start gap-6">
                    {exp.logo && (
                      <div className={`relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden ${exp.logoBg} shadow-lg shrink-0`}>
                        <Image
                          src={exp.logo}
                          alt={`Logo de ${exp.company}`}
                          fill
                          className="object-contain p-4"
                          sizes="112px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    {(exp.website || exp.certificate) && (
                      <div className="flex flex-wrap gap-x-5 gap-y-1">
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-400 transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {exp.company.includes('ESO')
                              ? 'Ver portal supernova.eso.org'
                              : 'Ver proyecto'}
                          </a>
                        )}
                        {exp.certificate && (
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-emerald-500 hover:text-emerald-400 transition-colors"
                          >
                            <FileText className="h-3 w-3" />
                            Certificado de experiencia
                          </a>
                        )}
                      </div>
                    )}

                    {exp.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {exp.projects && (
                      <div className="space-y-3">
                        {exp.projects.map((project, pi) => (
                          <CollapsibleProject
                            key={pi}
                            project={project}
                            defaultOpen={pi === 0}
                          />
                        ))}
                      </div>
                    )}

                    <TechBadges technologies={exp.technologies} />
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
