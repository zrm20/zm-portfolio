
interface NavLink {
  label: string;
  to: string;
  isExternalLink: boolean;
  isPrimary: boolean;
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    to: "/",
    isExternalLink: false,
    isPrimary: true
  },
  {
    label: "Audio",
    to: "/audio",
    isExternalLink: false,
    isPrimary: true
  },
  {
    label: "Software",
    to: "/dev",
    isExternalLink: false,
    isPrimary: true
  },
  {
    label: "Resume",
    to: "/resume",
    isExternalLink: false,
    isPrimary: true
  },
  {
    label: "Skills",
    to: "/skills",
    isExternalLink: false,
    isPrimary: false,
  },
  {
    label: "Projects",
    to: "/projects",
    isExternalLink: false,
    isPrimary: false,
  },
  {
    label: "Experience",
    to: "/experience",
    isExternalLink: false,
    isPrimary: false,
  },
  {
    label: "Education",
    to: "/education",
    isExternalLink: false,
    isPrimary: false
  }
];

export const primaryLinks = navLinks.filter(link => link.isPrimary);
export const secondaryLinks = navLinks.filter(link => !link.isPrimary);

export default navLinks;