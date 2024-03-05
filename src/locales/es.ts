import { yearsOfExperience } from '@/lib/utils';
import { Translations } from '@/components/translations';

export const t: Translations = {
  general: {
    view: 'Ver',
    present: 'Presente',
    langPicked: 'El idioma seleccionado es',
  },
  commandMenu: {
    header: {
      press: 'Pulsa',
      openCmd: 'para abrir la paleta de comandos',
    },
    buttonTitle: 'Abrir la paleta de comandos',
    inputPlaceholder: 'Escribe un comando o término de búsqueda',
    actions: {
      heading: 'Acciones',
      print: 'Imprimir',
    },
    theme: {
      heading: 'Cambiar tema',
    },
  },
  languagePicker: {
    chooseLanguage: 'Elige un idioma',
  },
  basics: {
    name: 'Javier Luque Rodríguez',
    label: `Full Stack Developer con más de ${yearsOfExperience} años de experiencia`,
    image: '/me.webp',
    email: 'javier.lr96@gmail.com',
    phone: '+34 664861333',
    url: '',
    location: {
      address: '',
      postalCode: '18190',
      city: 'Cenes de la Vega',
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
        '¡Hola, soy Javi! Actualmente soy Desarrollador Web con más de 3 años de experiencia. Soy una persona muy autodidacta, me encanta aprender y afronto los retos con muchas ganas.',
        'Desde que comencé mi formación en el ámbito de la informática he adquirido muchos conocimientos como Java, Spring, React, Next.js, Node.js, Angular, PHP, Laravel, OpenAPI (Swagger), MySQL, MongoDB, JavaScript, TypeScript y CSS.',
        'En mi tiempo libre también dedico mucho tiempo a Linux y aprender tecnologías nuevas.',
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
          ],
          technologies: [
            'Websphere Commerce V8',
            'Java',
            'Struts',
            'Solr',
            'DB2',
            'Git',
          ],
        },
        {
          name: 'Viewnext',
          position: 'Junior Full Stack Developer',
          startDate: '2021-01-11',
          endDate: '2022-04-23',
          summary: [
            'Desarrollo de nuevo portal interno de la Gerencia Informática de la Seguridad Social',
          ],
          technologies: ['Angular', 'TypeScript', 'CSS'],
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
          ],
          technologies: [
            'Java',
            'PHP',
            'Laravel',
            'CSS',
            'AdobeXD',
            'Linux',
            'Apache',
            'Nginx',
            'FTP',
            'Docker',
            'JavaScript',
            'TypeScript',
            'Vue',
            'React',
            'Angular',
            'SQL',
            'MySQL',
            'MongoDB',
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
