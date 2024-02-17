import { Translations } from '..';

export const t: Translations = {
  basics: {
    name: 'Javier Luque Rodríguez',
    label:
      'Full Stack Developer con más de 3 años de experiencia',
    image: '/me.webp',
    email: 'javier_lr96@gmail.com',
    phone: '+34 664861333',
    url: '',
    location: {
      address: '',
      postalCode: '18190',
      city: 'Cenes De La Vega',
      countryCode: 'ES',
      region: 'España',
    },
    profiles: [
      {
        network: 'LinkedIn',
        username: 'jluquer',
        url: 'https://linkedin.com/in/jluquer',
      },
      {
        network: 'GitHub',
        username: 'jluquer',
        url: 'https://github.com/jluquer',
      },
    ],
  },
  cvSections: {
    about: {
      title: 'Sobre mí',
      summary:
        '+3 años de experiencia como Desarrollador Web. Vivo en Granada, España. He trabajado en diferentes entornos: desde acelerar el desarrollo de start-ups hasta liderando equipos de empresas multinacionales.',
    },
    experience: {
      title: 'Experiencia',
      entries: [
        {
          name: 'Knowmad Mood',
          position: 'Full Stack Developer',
          startDate: '2022-05-24',
          summary:
            'En desarrollo.',
          highlights: ['En desarrollo'],
        },
      ],
    },
    education: {
      title: 'Educación',
      entries: [
        {
          institution: 'IES Campanillas - PTA',
          url: '',
          area: 'Software Engineer',
          studyType: 'Certificate of Higher Education',
          startDate: '2019-09-01',
          endDate: '2021-06-24',
          score: '10.0',
          courses: [''],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      entries: [
        {
          name: 'HTML',
          level: 'Master',
          keywords: ['Desarrollo Web', 'Frontend'],
        },
        {
          name: 'CSS',
          level: 'Master',
          keywords: ['Desarrollo Web', 'Frontend', 'Diseño Responsive'],
        },
        {
          name: 'JavaScript',
          level: 'Master',
          keywords: ['Desarrollo Web', 'Frontend', 'Backend', 'Fullstack'],
        },
        {
          name: 'Tailwind',
          level: 'Avanzado',
          keywords: [
            'Desarrollo Web',
            'Frontend',
            'CSS Framework',
            'Diseño Responsive',
          ],
        },
        {
          name: 'TypeScript',
          level: 'Avanzado',
          keywords: [
            'Desarrollo Web',
            'Frontend',
            'Backend',
            'JavaScript Superset',
          ],
        },
        {
          name: 'Node',
          level: 'Avanzado',
          keywords: ['Desarrollo Web', 'Backend', 'JavaScript', 'Servidor'],
        },
        {
          name: 'MySQL',
          level: 'Avanzado',
          keywords: [
            'Bases de Datos',
            'SQL',
            'Almacenamiento de Datos',
            'Backend',
          ],
        },
        {
          name: 'Git',
          level: 'Avanzado',
          keywords: ['Control de Versiones', 'Colaboración', 'Código Fuente'],
        },
        {
          name: 'GitHub',
          level: 'Avanzado',
          keywords: [
            'Control de Versiones',
            'Colaboración',
            'Código Fuente',
            'Git',
          ],
        },
        {
          name: 'Next.js',
          level: 'Avanzado',
          keywords: [
            'Desarrollo Web',
            'Frontend',
            'React Framework',
            'SSR',
            'Static Generation',
          ],
        },
        {
          name: 'React',
          level: 'Avanzado',
          keywords: ['Desarrollo Web', 'Frontend', 'JavaScript Library', 'UI'],
        },
      ],
    },
    languages: {
      title: 'Idiomas',
      entries: [
        {
          language: 'Spanish',
          fluency: 'Nativo',
        },
        {
          language: 'English',
          fluency: 'Avanzado',
        },
      ],
    },
  },
};
