export interface Translations {
  basics: Basics;
  cvSections: {
    about: { title: string; summary: string };
    experience: CVSection<Job>;
    volunteer?: CVSection<Volunteer>;
    education: CVSection<Education>;
    awards?: CVSection<Awards>;
    certificates?: CVSection<Certificates>;
    publications?: CVSection<Publications>;
    skills: CVSection<Skills>;
    languages: CVSection<Languages>;
    interests?: CVSection<Interests>;
    references?: CVSection<References>;
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
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Job {
  name: string;
  position: string;
  url?: string;
  startDate: DateStr;
  endDate?: DateStr | null;
  summary: string;
  highlights: Highlight;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Skills {
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score: string;
  courses: Array<string>;
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
  | 'Bengali'
  | string;

interface Projects {
  name: string;
  isActive?: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
}

type Highlight = Array<string>;
