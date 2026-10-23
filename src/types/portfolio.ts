export type IconName =
  | "megaphone"
  | "users"
  | "chart"
  | "clapperboard"
  | "share"
  | "compass"
  | "pen"
  | "palette"
  | "bag"
  | "scroll"
  | "graduation"
  | "mail"
  | "phone"
  | "map"
  | "message"
  | "download"
  | "moon"
  | "sun"
  | "menu"
  | "close"
  | "arrowRight"
  | "arrowLeft"
  | "arrowUp";

export type SocialPlatform = "linkedin" | "instagram" | "facebook";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  title: string;
  description: string;
  icon: IconName;
};

export type ExperienceItem = {
  title: string;
  status: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  missions: string[];
  results: string[];
  validated: boolean;
};

export type ProjectCategory =
  | "Communication Digitale"
  | "Facebook Ads"
  | "Instagram Ads"
  | "Community Management"
  | "Création Graphique"
  | "E-commerce";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  description: string;
  tools: string[];
  objective: string;
  cover: string;
  conceptual: boolean;
  context: string;
  problem: string;
  objectives: string[];
  audience: string;
  strategy: string;
  visuals: string;
  methodology: string[];
  results: string[];
  gallery: GalleryImage[];
};

export type EducationItem = {
  degree: string;
  school: string;
  university: string;
  city: string;
  year: string;
  description: string;
};

export type CertificationItem = {
  title: string;
  event: string;
  organizer: string;
  year: string;
  description: string;
  kind: "participation";
  image: string;
};

export type Service = {
  title: string;
  description: string;
  icon: IconName;
};

export type PortfolioContent = {
  locale: "fr";
  htmlLang: string;
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  profile: {
    firstName: string;
    fullName: string;
    title: string;
    subtitle: string;
    location: string;
    city: string;
    country: string;
    bio: string;
    aboutLead: string;
    email: string;
    phone: string;
    photo: string;
    photoAlt: string;
    initials: string;
    socials: SocialLink[];
  };
  cv: {
    href: string;
    available: boolean;
    label: string;
    unavailableLabel: string;
  };
  navLabel: string;
  nav: NavItem[];
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    photoHint: string;
    basedLabel: string;
  };
  about: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; description: string; icon: IconName }[];
  };
  skills: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Skill[];
    toolsTitle: string;
    toolsDescription: string;
    tools: string[];
    toolsEmpty: string;
  };
  experience: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    noticeTitle: string;
    notice: string;
    exampleBadge: string;
    missionsLabel: string;
    resultsLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    filterLabel: string;
    conceptualBadge: string;
    conceptualNotice: string;
    view: string;
    objectiveLabel: string;
    toolsLabel: string;
    countSingular: string;
    countPlural: string;
    empty: string;
    categories: ProjectCategory[];
    items: Project[];
    back: string;
    sections: {
      context: string;
      problem: string;
      objectives: string;
      audience: string;
      strategy: string;
      visuals: string;
      methodology: string;
      results: string;
    };
    galleryEmpty: string;
    resultsEmpty: string;
    coverEmpty: string;
  };
  education: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    items: EducationItem[];
  };
  certifications: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    view: string;
    missing: string;
    participationLabel: string;
    organizerLabel: string;
    items: CertificationItem[];
  };
  services: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    navLabel: string;
    items: Service[];
  };
  contact: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    whatsapp: string;
    nameLabel: string;
    emailFieldLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submit: string;
    notice: string;
    missingEmail: string;
    opened: string;
    errors: {
      name: string;
      email: string;
      emailInvalid: string;
      subject: string;
      message: string;
      messageLong: string;
    };
  };
  footer: {
    text: string;
    rights: string;
    year: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    cta: string;
  };
  a11y: {
    skip: string;
    backToTop: string;
    themeToggle: string;
    menuOpen: string;
    menuClose: string;
    newTab: string;
  };
};
