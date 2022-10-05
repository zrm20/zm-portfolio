import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faHouseUser, faIdCard, faMapLocationDot, faCertificate } from "@fortawesome/free-solid-svg-icons";

const genInfo = [
  {
    title: 'Age',
    value: 30,
    icon: faIdCard
  },
  {
    title: 'Hometown',
    value: 'Marshall, MN',
    icon: faMapLocationDot,
    includeInTraditional: true,
  },
  {
    title: 'Current Home',
    value: 'Nashville, TN',
    includeInTraditional: true,
    icon: faHouseUser,
  },
  {
    title: 'Education',
    value: 'Belmont University 2014',
    icon: faGraduationCap,
    includeInTraditional: true,
  },
  {
    title: 'Degree',
    value: 'Bachelor of Science in Audio Engineering',
    icon: faCertificate,
    includeInTraditional: true,
  },
  {
    title: 'Mac',
    value: 'Proficient',
    icon: faApple
  },
];

export default genInfo;