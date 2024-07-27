export interface Translations {
  general: {
    view: string;
    present: string;
    langPicked: string;
  };
  commandMenu: {
    header: {
      press: string;
      openCmd: string;
    };
    buttonTitle: string;
    inputPlaceholder: string;
    actions: {
      heading: string;
      print: string;
    };
    theme: {
      heading: string;
    };
  };
  languagePicker: {
    chooseLanguage: string;
  };
  basics: Basics;
  cvSections: {
    about: { title: string; summary: string[] };
    experience: CVSection<SingleProjectCompany | MultipleProjectsCompany>;
    education: CVSection<Education>;
    skills?: CVSection<Skills>;
    languages: CVSection<Languages>;
    projects?: CVSection<Projects> & {
      goToSourceCode: (projectName: string) => string;
    };
  };
}

interface CVSection<T> {
  title: string;
  entries: Array<T>;
}

interface Basics {
  name: string;
  label: string;
  email: string;
  phone: string;
  url: string;
  location: Location;
  profiles: Array<Profile>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: string;
  url: string;
}

interface Company {
  company: string;
  url?: string;
}

interface CompanyProject {
  title: string;
  start: DateStr;
  end?: DateStr | null;
  description?: string[];
  technologies?: string[];
  links?: string[];
}

interface SingleProjectCompany extends Company, CompanyProject {}

interface MultipleProjectsCompany extends Company, CompanyProject {
  projects: Array<CompanyProject>;
}

type DateStr = `${string}-${string}-${string}`;

interface Skills {
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Education {
  institution: string;
  degree: string;
  startDate: DateStr;
  endDate?: DateStr;
  summary?: string[];
  technologies?: string[];
}

interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | 'Spanish'
  | 'English'
  | 'German'
  | 'France'
  | 'Italian'
  | 'Korean'
  | 'Portuguese'
  | 'Chinese'
  | 'Arabic'
  | 'Dutch'
  | 'Finnish'
  | 'Russian'
  | 'Turkish'
  | 'Hindi'
  | 'Bengali';

type Skill =
  | 'Next.js/React'
  | 'Tailwind'
  | 'TypeScript'
  | 'NextUI'
  | 'Prisma'
  | 'Zustand'
  | 'PostgreSQL';

interface Projects {
  title: string;
  description: string;
  techStack: Skill[];
  gitHref?: string;
  link: {
    label: string;
    href: string;
  };
}
