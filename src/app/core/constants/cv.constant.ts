import { CVData } from '../models/cv.model';

export const CV_DATA: CVData = {
  personalInfo: {
    name: 'Eric Michel Villavicencio Reyes',
    title: 'Ingeniero Informático | Full Stack Developer | Profesor Universitario',
    summary:
      'Profesional apasionado por la programación con experiencia en desarrollo full stack. Competidor en programación competitiva y entrenador de equipos de ICPC. Profesor en Universidad de Las Tunas con especialización en software empresarial.',
  },
  contact: {
    email: 'daphniphyllum901@gmail.com',
    phone: '+5354939174',
    github: 'https://github.com/ElectroZombie',
  },
  education: [
    {
      degree: 'Ingeniería Informática',
      institution: 'Universidad de Las Tunas',
      date: '12/2023',
    },
  ],
  workExperience: [
    {
      position: 'Profesor del Departamento de Informática',
      company: 'Universidad de Las Tunas (ULT)',
      period: '2/2024 – Presente',
      description: 'Docencia en programación y algoritmos. Entrenador de equipo ICPC.',
    },
    {
      position: 'Especialista A de Departamento de Desarrollo',
      company: 'Sociedad Mercantil Cubana Casas de Cambio S.A. (CADECA)',
      period: '9/2025 – Presente',
      description: 'Desarrollo de soluciones empresariales.',
    },
    {
      position: 'Programador del Departamento de Desarrollo',
      company: 'Empresa Provincial de Transporte de Pasajeros y Cargas Generales (CARDINAL)',
      period: '10/2024 – 3/2025',
      description: 'Desarrollo de aplicaciones para gestión de transporte.',
    },
  ],
  skills: [
    {
      category: 'Fullstack',
      items: ['Flutter', 'Java (Aplicaciones de escritorio)', 'CodeIgniter'],
    },
    {
      category: 'Frontend',
      items: ['ReactJS', 'Angular'],
    },
    {
      category: 'Backend',
      items: ['NestJS', 'Java', 'Python', 'Go'],
    },
    {
      category: 'Bases de Datos',
      items: ['MySQL', 'SQLite', 'PostgreSQL'],
    },
    {
      category: 'Herramientas',
      items: ['GitHub', 'Git', 'Postman'],
    },
    {
      category: 'Cloud Services',
      items: ['PocketBase', 'Supabase'],
    },
    {
      category: 'Lenguajes de Programación',
      items: ['C++', 'C#', 'Python', 'Go', 'Java', 'TypeScript'],
    },
  ],
  projects: [
    {
      name: 'Elecciones ULT',
      description: 'Sistema de votaciones electrónicas para la universidad.',
      technologies: ['Flutter', 'Backend'],
    },
    {
      name: 'LisTesis',
      description: 'Plataforma para gestión de tesis de grado.',
      technologies: ['Java', 'Web'],
    },
    {
      name: 'Encuestas de Cuadros',
      description: 'Sistema de encuestas para evaluación de directivos.',
      technologies: ['Full Stack'],
    },
    {
      name: 'EsculTunas',
      description:
        'Ganador de Laboratorio Ciudadano: Las Tunas, Capital de la Escultura Cubana. Proyecto de innovación ciudadana.',
      technologies: ['Flutter', 'PocketBase'],
    },
  ],
  curriculum: [
    'Competidor de programación competitiva. Participó en CIIC 2016 y en ICPC 2022 y 2023.',
    'Medalla de plata a nivel regional (Región del Caribe) en ICPC 2022.',
    'Ganador de la convocatoria Laboratorio Ciudadano: Las Tunas 2023.',
    'Delegado en la Feria de Prototipos de co-Lab en Congreso Internacional Cibersociedad 2023.',
    'Desarrollo activo de múltiples softwares en Java y Flutter para la Universidad de Las Tunas.',
    'Entrenador del grupo de preparación ICPC. Equipo llegó a final regional en 2025.',
  ],
  languages: [
    'Español - Nativo',
    'Inglés - Avanzado',
  ],
};
