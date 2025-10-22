'use client';

import { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="font-bold text-xl">Portafolio</span>
          </div>

          <div className="hidden md:flex space-x-8" role="menubar">
            <button
              onClick={() => scrollToSection('inicio')}
              className="hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección sobre mí"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de proyectos"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de experiencia"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de contacto"
            >
              Contacto
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-card border-t border-border"
          role="menu"
          aria-label="Menú móvil"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="block w-full text-left hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección sobre mí"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="block w-full text-left hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de proyectos"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="block w-full text-left hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de experiencia"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left hover:text-primary transition-colors"
              role="menuitem"
              aria-label="Ir a la sección de contacto"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

