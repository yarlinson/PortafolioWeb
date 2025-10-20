'use client';

import { Github, Linkedin, Mail, User, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      aria-label="Sección de inicio"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInUp">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-primary font-medium">
                Bienvenido a mi portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hola, soy <span className="gradient-text">Yarlinson Barranco</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Ingeniero de Sistemas especializado en desarrollo web full-stack con Python, Django, PostgreSQL, MySQL, TypeScript,
              React y Next.js; programación orientada a objetos y desarrollo de APIs REST
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => {
                  const element = document.getElementById('proyectos');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="animate-glow"
              >
                Ver Proyectos
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contáctame
              </Button>
            </div>

            <div
              className="flex space-x-4"
              role="list"
              aria-label="Enlaces de redes sociales"
            >
              <a
                href="https://github.com/yarlinson"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Visitar perfil de GitHub"
              >
                <Github className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/yarlinson-barranco-988a50301/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Visitar perfil de LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="mailto:yarlinson0@gmail.com"
                className="hover:text-primary transition-colors"
                aria-label="Enviar email"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                <Image
                  src="/yarlinson.png"
                  alt="Foto de perfil de Yarlinson Barranco"
                  fill
                  priority
                  sizes="(max-width: 768px) 16rem, 20rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
