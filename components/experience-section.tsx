import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experience = [
  {
    role: 'Desarrollador de Software - BeanChain',
    company: 'Enciso Systems',
    period: '07/2025 - 09/2025',
    description:
      'Desarrollé una plataforma web para trazabilidad de cacao utilizando Django, implementé APIs RESTful, gestioné una base de datos PostgreSQL y realicé containerización completa con Docker. Diseñé y desarrollé interfaces de usuario responsivas con HTML, CSS y JavaScript, incluyendo mapas interactivos para visualización geoespacial de fincas y seguimiento de envíos. Utilicé control de versiones y colaboración en equipo a través de GitHub.',
    technologies: ['Django', 'PostgreSQL', 'Docker', 'HTML/CSS/JavaScript', 'GitHub'],
    website: 'https://beanchain.encisosystems.com/'
  },
  {
    role: 'Monitor de Soporte Técnico',
    company: 'Universidad de los Llanos - IDEAD',
    period: '02/2025 - 06/2025',
    description:
      'Brindé atención especializada a solicitudes de estudiantes y soporte técnico integral en la plataforma virtual de cursos Moodle. Gestioné incidentes, configuré aulas virtuales, desarrollé y subí materiales educativos digitales, y ofrecí asistencia personalizada a usuarios del campus virtual para optimizar su experiencia de aprendizaje en línea.',
    technologies: ['Moodle', 'Soporte Técnico', 'Gestión de Incidentes', 'Materiales Educativos'],
    website: ''
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
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <p className="text-primary mb-3">{exp.company}</p>
                  {exp.website && (
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 mb-3 block"
                    >
                      {exp.website}
                    </a>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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

