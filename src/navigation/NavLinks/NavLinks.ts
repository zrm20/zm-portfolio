
interface NavLink {
  label: string;
  to: string;
  isExternalLink: boolean;
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    to: "/",
    isExternalLink: false,
  },
  {
    label: "Audio",
    to: "/audio",
    isExternalLink: false,
  },
  {
    label: "Software",
    to: "/dev",
    isExternalLink: false
  },
  {
    label: "Resume",
    to: "/resume",
    isExternalLink: false
  }
];

export default navLinks;