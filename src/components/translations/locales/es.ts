import { Translations } from '..';

export const t: Translations = {
  general: {
    view: 'Ver',
    present: 'Presente',
  },
  basics: {
    name: 'Javier Luque Rodríguez',
    label: 'Full Stack Developer con más de 3 años de experiencia',
    image: '/me.webp',
    email: 'javier.lr96@gmail.com',
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
        url: 'https://linkedin.com/in/jluquer',
      },
      {
        network: 'GitHub',
        url: 'https://github.com/jluquer',
      },
    ],
  },
  cvSections: {
    about: {
      title: 'Sobre mí',
      summary: [
        'Psicólogo y Técnico en Desarrollo de Aplicaciones Web.',
        'Estudioso, inquieto y apasionado por el aprendizaje, por lo que afronto con muchas ganas los nuevos retos.',
        'Desde que comencé mi formación en el ámbito de la informática he adquirido muchos conocimientos como Java, Java EE, JSTL, Spring, PHP, Node.js, Swagger, OpenAPI, Laravel, MySQL, MongoDB (NoSQL), JavaScript, TypeScript, CSS, Sass, Vue, React y Angular. También he adquirido muchos conocimientos en Linux de forma autodidacta.',
      ],
    },
    experience: {
      title: 'Experiencia',
      entries: [
        {
          name: 'Knowmad Mood',
          position: 'Full Stack Developer',
          startDate: '2022-05-24',
          summary: [
            'Desarrollo de nuevas funcionalidades y mantenimiento de las webs chcarolinaherrera.com y purificaciongarcia.com',
            'Stack tecnológico: Websphere Commerce V8, Java, Struts, Rest, Solr, DB2',
            'Control de versiones con SVN, GitHub and GitLab',
          ],
        },
        {
          name: 'Viewnext',
          position: 'Junior Full Stack Developer',
          startDate: '2021-01-11',
          endDate: '2022-04-23',
          summary: [
            'Desarrollo de nuevo portal interno de la Gerencia Informática de la Seguridad Social.',
          ],
        },
      ],
    },
    education: {
      title: 'Educación',
      entries: [
        {
          institution: 'IES Campanillas - PTA',
          degree: 'Grado Superior de Desarrollo de Aplicaciones Web',
          startDate: '2019-09-01',
          endDate: '2021-06-24',
          summary: [
            'El Grado Superior en Desarrollo de Aplicaciones Web busca formar profesionales altamente cualificados para desempeñar su trabajo en el área de desarrollo de aplicaciones informáticas relacionadas con entornos Web (intranet, extranet e internet).',
            'Principales tecnologías: Java, Java EE, SQL, MongoDB, PHP, Laravel, CSS, Sass, AdobeXD, Linux, Apache, Nginx, FTP, Docker, JavaScript, TypeScript, Vue, React, Angular, HTML5 y MySQL.',
          ],
        },
        {
          institution: 'Universidad de Málaga',
          degree: 'Grado en Psicología',
          startDate: '2015-09-15',
          endDate: '2019-09-01',
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
