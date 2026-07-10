import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navItems = [
    { label: 'Inicio', route: '/home' },
    { label: 'Acerca de', route: '/about' },
    { label: 'Habilidades', route: '/skills' },
    { label: 'Proyectos', route: '/projects' },
    { label: 'Experiencia', route: '/experience' },
    { label: 'Contacto', route: '/contact' },
  ];
}
