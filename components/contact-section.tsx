'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
      aria-label="Sección de contacto"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Trabajemos <span className="gradient-text">Juntos?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y oportunidades. No dudes en
            contactarme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:yarlinson0@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-glow"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              Enviar Email
            </a>
            <Button
              asChild
              size="lg"
              className="animate-glow"
            >
              <a
                href="/cv-yarlinson-barranco.pdf"
                download="CV-Yarlinson-Barranco.pdf"
              >
                <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                Descargar CV
              </a>
            </Button>
            <a
              href="https://wa.me/573204991236"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <div
            className="flex justify-center space-x-6"
            role="list"
            aria-label="Enlaces de contacto"
          >
            <a
              href="https://github.com/yarlinson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
              aria-label="Visitar perfil de GitHub"
            >
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/yarlinson-barranco-988a50301/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
              aria-label="Visitar perfil de LinkedIn"
            >
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:yarlinson0@gmail.com"
              className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
              aria-label="Enviar email"
            >
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
