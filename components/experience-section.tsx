import { Briefcase, ExternalLink, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Project = {
  name: string;
  client?: string;
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
};

const experience: Experience[] = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Enciso Systems',
    period: '03/2025 - 03/2026',
    technologies: [
      'Django',
      'Django REST Framework',
      'Microservicios',
      'PostgreSQL',
      'PostGIS',
      'Docker',
      'Docker Compose',
      'Makefile',
      'Next.js',
      'TypeScript',
      'Leaflet',
      'HTML/CSS/JavaScript',
      'GitHub',
    ],
    certificate: '/COR26008_signed.pdf',
    projects: [
      {
        name: 'Climate Investment Project Pipeline Dashboard',
        client: 'Global Green Growth Institute (GGGI)',
        bullets: [
          'Diseñé y desarrollé de forma integral una arquitectura de microservicios con Django REST Framework: proposals-projects-users (usuarios, propuestas, portafolios y reportes), document-management (trazabilidad y versionado seguro de archivos) y notifications (notificaciones in-app y correo SMTP).',
          'Construí y aseguré APIs RESTful, integré microservicios mediante clientes HTTP y automaticé seeds y migraciones para datos reales y de demostración (PNG).',
          'Orquesté el ecosistema completo con Docker Compose y Makefile para entornos locales reproducibles y flujos de CI.',
          'Desarrollé el frontend completo en Next.js/TypeScript con autenticación, gestión de usuarios y roles, dashboards con métricas y gráficos, formularios y filtros avanzados.',
          'Implementé visualización geoespacial avanzada con Leaflet, creando componentes personalizados (LocationMapViewer, PolygonBuilder) para la digitalización y visualización de polígonos en el navegador.',
        ],
      },
      {
        name: 'BeanChain – Plataforma de Trazabilidad de Cacao',
        client: '',
        bullets: [
          'Desarrollo end-to-end de plataforma web con Django y DRF, implementando APIs RESTful con serializers diferenciados para lectura/escritura.',
          'Arquitectura geoespacial con GeoDjango y PostGIS: gestión de fincas con polígonos, cálculo automático de hectáreas y seguimiento de actores de la cadena de suministro.',
          'Sistema de trazabilidad completo: cosechas, transacciones entre actores (cooperativas, exportadores, procesadores), gestión de envíos y cumplimiento con regulación EU 2023/1115.',
          'Frontend con mapas interactivos en Leaflet: visualización de fincas, digitalización de polígonos, seguimiento de rutas y dashboards de cumplimiento.',
        ],
      },
    ],
    website: 'https://beanchain.encisosystems.com/',
  },
  {
    role: 'Monitor de Soporte Técnico',
    company: 'Universidad de los Llanos - IDEAD',
    period: '02/2025 - 06/2025',
    description:
      'Brindé atención especializada a solicitudes de estudiantes y soporte técnico integral en la plataforma virtual de cursos Moodle. Gestioné incidentes, configuré aulas virtuales, desarrollé y subí materiales educativos digitales, y ofrecí asistencia personalizada a usuarios del campus virtual para optimizar su experiencia de aprendizaje en línea.',
    technologies: ['Moodle', 'Soporte Técnico', 'Gestión de Incidentes', 'Materiales Educativos'],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="py-20 px-4 sm:px-6 lg:px-8"
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

        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <Card key={index} className="p-8 hover-scale glass">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Briefcase className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <Badge variant="secondary" className="self-start sm:self-auto whitespace-nowrap">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>

                  {/* Links row */}
                  {(exp.website || exp.certificate) && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Ver proyecto BeanChain
                        </a>
                      )}
                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Certificado de experiencia
                        </a>
                      )}
                    </div>
                  )}

                  {/* Simple description (no sub-projects) */}
                  {exp.description && (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}

                  {/* Sub-projects */}
                  {exp.projects && (
                    <div className="space-y-5 mb-4">
                      {exp.projects.map((project, pi) => (
                        <div key={pi}>
                          <div className="mb-2">
                            <h4 className="text-base font-semibold text-foreground">
                              {project.name}
                            </h4>
                            {project.client && (
                              <p className="text-xs text-muted-foreground mt-0.5">
                                Cliente: {project.client}
                              </p>
                            )}
                          </div>
                          <ul className="space-y-1.5">
                            {project.bullets.map((bullet, bi) => (
                              <li
                                key={bi}
                                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech, ti) => (
                      <Badge key={ti} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
