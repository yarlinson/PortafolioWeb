import { User, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python',
  'Django',
  'PostgreSQL',
  'MySQL',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'HTML5/CSS3',
  'Bootstrap',
  'Git',
  'Docker',
  'C++',
  'Java',
  'PHP',
  'SQL',
  'REST APIs',
  'MVC',
];

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Sección sobre mí"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce más sobre mi experiencia, habilidades y lo que me apasiona
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover-scale glass">
            <User className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">¿Quién soy?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desarrollador de software con enfoque en programación orientada a objetos y desarrollo web full-stack. Experiencia en C++, Python, Java, PHP, TypeScript, React y Next.js, con sólidos conocimientos en paradigmas de programación estructurada y orientada a objetos. Manejo de bases de datos relacionales (PostgreSQL, MySQL), incluyendo diseño y optimización de consultas SQL. Experiencia práctica en desarrollo web utilizando el framework Django, aplicando arquitectura MVC y creando APIs REST eficientes y escalables.
            </p>
          </Card>

          <Card className="p-8 hover-scale glass">
            <Sparkles
              className="h-12 w-12 text-primary mb-4"
              aria-hidden="true"
            />
            <h3 className="text-2xl font-bold mb-4">Mis Cualidades</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2" aria-hidden="true">
                  ✦
                </span>
                Trabajo en equipo
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2" aria-hidden="true">
                  ✦
                </span>
                Responsabilidad en el trabajo
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2" aria-hidden="true">
                  ✦
                </span>
                Capacidad de aprendizaje rápido
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2" aria-hidden="true">
                  ✦
                </span>
                Comunicación
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2" aria-hidden="true">
                  ✦
                </span>
                Organización y puntualidad
              </li>
            </ul>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Habilidades Técnicas
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

