import { Translations } from '@/components/translations';
import { yearsOfExperience } from '@/lib/utils';

export const t: Translations = {
  general: {
    view: 'View',
    present: 'Present',
    langPicked: 'Selected language is',
  },
  commandMenu: {
    header: {
      press: 'Press',
      openCmd: 'to open command menu',
    },
    buttonTitle: 'Open command menu',
    inputPlaceholder: 'Type a command or search',
    actions: {
      heading: 'Actions',
      print: 'Print',
    },
    theme: {
      heading: 'Change theme',
    },
  },
  languagePicker: { chooseLanguage: 'Choose a language' },
  basics: {
    name: 'Javier Luque Rodríguez',
    label: `Full-Stack developer with more than ${yearsOfExperience} years of experience`,
    email: 'javier.lr96@gmail.com',
    phone: '+34 664861333',
    url: '',
    location: {
      address: '',
      postalCode: '18190',
      city: 'Cenes de la Vega',
      countryCode: 'ES',
      region: 'Spain',
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
      title: 'About me',
      summary: [
        'Hello, I am Javi! I am currently a Web Developer with more than 3 years of experience. I am a very self-taught person, I love learning and I face challenges with great enthusiasm.',
        'Since I began my training in the field of computing, I have acquired a lot of knowledge such as Java, Spring, React, Next.js, Node.js, Angular, PHP, Laravel, OpenAPI (Swagger), MySQL, MongoDB, JavaScript, TypeScript and CSS. ',
        'In my free time I also spend a lot of time on Linux and learning new technologies.',
      ],
    },
    experience: {
      title: 'Experience',
      entries: [
        {
          name: 'Knowmad Mood',
          position: 'Full Stack Developer',
          startDate: '2022-05-24',
          summary: [
            'Development of new functionalities and maintenance of the websites chcarolinaherrera.com and purificaciongarcia.com',
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
            'Development of a new internal portal for the Social Security IT Management',
          ],
          technologies: ['Angular', 'TypeScript', 'CSS'],
        },
      ],
    },
    education: {
      title: 'Education',
      entries: [
        {
          institution: 'IES Campanillas - PTA',
          degree: 'Grado Superior de Desarrollo de Aplicaciones Web',
          startDate: '2019-09-01',
          endDate: '2021-06-24',
          summary: [
            'The Higher Degree in Web Application Development seeks to train highly qualified professionals to carry out their work in the area of development of computer applications related to Web environments (intranet, extranet and internet).',
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
          institution: 'University of Malaga',
          degree: 'Psychology Degree',
          startDate: '2015-09-15',
          endDate: '2019-09-01',
          summary: [
            'My background in psychology has been crucial in developing skills such as empathy, effective communication, and the ability to work in teams. These skills are reflected in my approach as a web developer, where I leverage my understanding of psychology to create intuitive, user-centered web interfaces, ensuring they are inclusive and easy to use for all users.',
          ],
        },
      ],
    },
    languages: {
      title: 'Languages',
      entries: [
        {
          language: 'Spanish',
          fluency: 'Native speaker',
        },
        {
          language: 'English',
          fluency: 'Advanced',
        },
      ],
    },
    projects: {
      title: 'Projects',
      entries: [
        {
          title: 'Pokedex',
          techStack: ['TypeScript', 'Next.js/React', 'NextUI'],
          description: 'Take a look to your favorites pokemons!',
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
          description: "Clone of Tesla's official clothing store",
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
