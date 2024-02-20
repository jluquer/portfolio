import { Translations } from '@/components/translations';

export const t: Translations = {
  general: {
    view: 'View',
    present: 'Present',
  },
  basics: {
    name: 'Javier Luque Rodríguez',
    label: 'Full-Stack developer with more than 3 years of experience',
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
      title: 'About me',
      summary: [
        'Psychologist and Web Application Developer.',
        'Studious, restless and passionate about learning, which is why I embrace new challenges with great enthusiasm.',
        'Since I began my training in computer science, I have acquired extensive knowledge in Java, Java EE, JSTL, Spring, PHP, Node.js, Swagger, OpenAPI, Laravel, MySQL, MongoDB (NoSQL), JavaScript, TypeScript, CSS, Sass, Vue, React, and Angular. I have also gained significant knowledge in Linux through self-study.',
      ],
    },
    experience: {
      title: 'Experience',
      entries: [
        {
          name: 'Knowmad Mood',
          position: 'Full Stack Developer',
          startDate: '2022-05-24',
          summary: 'In progress',
          highlights: ['In progress'],
        },
      ],
    },
    education: {
      title: 'Education',
      entries: [
        {
          institution: 'IES Campanillas - PTA',
          degree: 'Web App Development',
          startDate: '2019-09-01',
          endDate: '2021-06-24',
          summary: 'balblabaldsfasdf asdfa sdf adsf',
        },
      ],
    },
    skills: {
      title: 'Skills',
      entries: [
        {
          name: 'HTML',
          level: 'Master',
          keywords: ['Web development', 'Frontend'],
        },
        {
          name: 'CSS',
          level: 'Master',
          keywords: ['Web development', 'Frontend', 'Diseño Responsive'],
        },
        {
          name: 'JavaScript',
          level: 'Master',
          keywords: ['Web development', 'Frontend', 'Backend', 'Fullstack'],
        },
        {
          name: 'Tailwind',
          level: 'Advanced',
          keywords: [
            'Web development',
            'Frontend',
            'CSS Framework',
            'Diseño Responsive',
          ],
        },
        {
          name: 'TypeScript',
          level: 'Advanced',
          keywords: [
            'Web development',
            'Frontend',
            'Backend',
            'JavaScript Superset',
          ],
        },
        {
          name: 'Node',
          level: 'Advanced',
          keywords: ['Web development', 'Backend', 'JavaScript', 'Servidor'],
        },
        {
          name: 'MySQL',
          level: 'Advanced',
          keywords: ['Bases de Datos', 'SQL', 'Database', 'Backend'],
        },
        {
          name: 'Git',
          level: 'Advanced',
          keywords: ['Version control', 'Colaboración', 'Source code'],
        },
        {
          name: 'GitHub',
          level: 'Advanced',
          keywords: ['Version control', 'Collaboration', 'Source code', 'Git'],
        },
        {
          name: 'Next.js',
          level: 'Advanced',
          keywords: [
            'Web development',
            'Frontend',
            'React Framework',
            'SSR',
            'Static Generation',
          ],
        },
        {
          name: 'React',
          level: 'Advanced',
          keywords: ['Web development', 'Frontend', 'JavaScript Library', 'UI'],
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
  },
};
