import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ERIC MICHEL VILLAVICENCIO';

  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'Mi portafolio profesional construido con Angular y diseño retro arcade.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'Responsive'],
      github: 'https://github.com/ElectroZombie/portfolio',
    },
    {
      id: 2,
      title: 'Sistema de Gestión',
      description: 'Aplicación full-stack para gestión de proyectos y tareas con base de datos relacional.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Express'],
      github: 'https://github.com/ElectroZombie/proyecto-gestion',
    },
    {
      id: 3,
      title: 'API REST Avanzada',
      description: 'API RESTful robusta con autenticación JWT y validación de datos.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/ElectroZombie/api-rest',
    },
    {
      id: 4,
      title: 'E-Commerce',
      description: 'Plataforma de comercio electrónico con carrito de compras y pasarela de pago.',
      technologies: ['React', 'Node.js', 'Stripe', 'Firebase'],
      github: 'https://github.com/ElectroZombie/ecommerce',
    },
  ];
}
