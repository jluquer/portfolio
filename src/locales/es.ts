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
            'PHP/Laravel',
            'Vue',
            'React',
            'Angular',
            'JavaScript/TypeScript',
            'CSS',
            'SQL/MySQL',
            'NOSQL/MongoDB',
            'Docker',
            'Linux',
            'Apache/Nginx',
            'FTP',
          ],
        },
        {
          institution: 'Universidad de Málaga',
          degree: 'Grado en Psicología',
          startDate: '2015-09-15',
          endDate: '2019-09-01',
          summary: [
            'Mi formación en psicología ha sido fundamental para desarrollar habilidades como la empatía, la comunicación efectiva y la capacidad para trabajar en equipo. Estas habilidades se reflejan en mi enfoque como desarrollador web, donde utilizo mi comprensión de la psicología para desarrollar interfaces web intuitivas y centradas en el usuario, garantizando que sean inclusivas y fáciles de usar para todos los usuarios.',
          ],
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
    projects: {
      title: 'Proyectos',
      goToSourceCode: (projectName) =>
        `Ver código fuente del proyecto ${projectName}`,
      entries: [
        {
          title: 'Pokedex',
          techStack: ['TypeScript', 'Next.js/React', 'NextUI'],
          description: '¡Echale un vistazo a tus pokemons favoritos!',
          gitHref: 'https://github.com/jluquer/pokedex',
          link: {
            label: 'pokedex-jluquer.vercel.app',
            href: 'https://pokedex-jluquer.vercel.app/',
          },
        },
        {
          title: 'Teslo Shop',
          techStack: [
            'TypeScript',
            'Next.js/React',
            'Tailwind',
            'Zustand',
            'PostgreSQL',
            'Prisma',
          ],
          description: 'Clon de la tienda oficial de ropa de Tesla',
          gitHref: 'https://github.com/jluquer/teslo-shop',
          link: {
            label: 'jluquer-teslo-shop.vercel.app',
            href: 'https://jluquer-teslo-shop.vercel.app/',
          },
        },
      ],
    },
  },
};
