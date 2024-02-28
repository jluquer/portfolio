export interface Translations {
  general: {
    view: string;
    present: string;
  };
  basics: Basics;
  cvSections: {
    about: { title: string; summary: string[] };
    experience: CVSection<Job>;
    education: CVSection<Education>;
    skills: CVSection<Skills>;
    languages: CVSection<Languages>;
    projects?: CVSection<Projects>;
  };
}

interface CVSection<T> {
  title: string;
  entries: Array<T>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
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

interface Job {
  name: string;
  position: string;
  url?: string;
  startDate: DateStr;
  endDate?: DateStr | null;
  summary?: string[];
  technologies?: string[];
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

interface Projects {
  name: string;
  isActive?: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

type Highlight = Array<string>;
