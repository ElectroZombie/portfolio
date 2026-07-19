import { CVData } from '../models/cv.model';

export const CV_DATA: CVData = {
  personalInfo: {
    name: 'Eric Michel Villavicencio Reyes',
    title: 'Ingeniero Informático | Desarrollador FullStack | Profesor Universitario',
    summary:
      'Profesional apasionado por la programación con experiencia en desarrollo fullstack en disímiles lenguajes. Competidor y entrenador de equipos de ICPC. Profesor instructor en la Universidad de Las Tunas, Cuba.',
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
      position: 'Profesor instructor del Departamento de Informática',
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
      items: ['Docker', 'Git', 'Postman'],
    },
    {
      category: 'Servicios en la nube',
      items: ['PocketBase', 'Supabase', 'Vercel'],
    },
    {
      category: 'Lenguajes de Programación',
      items: ['C++', 'C#', 'Python', 'Go', 'Java', 'JavaScript', 'TypeScript'],
    },
  ],
  knowledges: ['Diseño y análisis de algoritmos',
    'Minería de datos',
    'Ingeniería de software',
    'Modelos de arquitectura',
    'Estructuras de datos',
    'Teoría de grafos'],
    softSkills: ['Dominio avanzado de inglés', 'Adaptabilidad al trabajo', 'Capacidad de aprendizaje', 'Buen trabajo en equipo'],
  projects: [
    {
      name: 'Elecciones ULT',
      description: 'Sistema de votaciones electrónicas para la universidad.',
      technologies: ['Java', 'SQLite', 'Desktop FullStack'],
    },
    {
      name: 'LisTesis',
      description: 'Plataforma para gestión de tesis de grado.',
      technologies: ['Flutter', 'SQLite', 'App'],
    },
    {
      name: 'Encuestas de Cuadros',
      description: 'Sistema de encuestas para evaluación de directivos.',
      technologies: ['Java', 'SQLite', 'Desktop FullStack'],
    },
    {
      name: 'EsculTunas',
      description:
        'Aplicación educativa para conocer las esculturas de la ciudad de Las Tunas',
      technologies: ['Flutter', 'SQLite', 'App'],
    },
  ],
  curriculum: [
    'Fue concursante de programación competitiva en su etapa estudiantil. Compitió por Cuba en la Competencia Iberoamericana de Programación (CIIC) en el año 2016 y en la Competencia Internacional de Programación Competitiva (ICPC) del 2022 y 2023, llegando su equipo en ambos casos a la final regional (Región del Caribe), y logrando medalla de plata a nivel regional en el año 2022.',
    'En 2023 fue parte del equipo ganador de la convocatoria Laboratorio Ciudadano: Las Tunas, Capital de la Escultura Cubana, auspiciada por el Laboratorio de Innovación Ciudadana co-Lab.',
    'Participó como delegado en la Feria de Prototipos de co-Lab, en el marco del Congreso Internacional Cibersociedad 2023, realizado en La Habana.',
    'Ha desarrollado varios sistemas informáticos que se mantienen en activo en la Universidad de Las Tunas, utilizando los lenguajes de programación Java y Dart, así como el framework Flutter.',
    'Se desempeña como profesor instructor del departamento de informática en la Universidad de Las Tunas, y es entrenador del grupo de preparación para las competencias de programación competitiva en la misma, llegando su equipo a la final regional (Región del Caribe) en el año 2025.'
  ],
  languages: [
    'Español - Nativo',
    'Inglés - Avanzado',
  ],
};
