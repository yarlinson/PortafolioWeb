import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    degree: 'Ingeniero de Sistemas',
    institution: 'Universidad de los Llanos, Villavicencio, Colombia',
    period: 'Junio 2020 - Junio 2026',
    logo: '/logounillanos.png',
  },
  {
    degree: 'Bootcamp de Programación Integrado',
    institution:
      'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC), Colombia',
    period: 'Jul 2024 - Dic 2024',
    logo: '/MinTICLogo.png',
  },
];

export function EducationSection() {
  return (
    <section
      id="educacion"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Sección de educación"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educación
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mi formación académica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover-scale glass">
              <div className="relative h-24 mb-6 flex items-center justify-center bg-white/5 rounded-lg p-4 border border-border/50">
                <Image
                  src={edu.logo}
                  alt={`Logo de ${edu.institution}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 200px, 300px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <Badge
                    variant="secondary"
                    className="self-start sm:self-auto whitespace-nowrap"
                  >
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
