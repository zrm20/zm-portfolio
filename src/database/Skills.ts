import abletonIcon from "../assets/images/icons/abletonIcon.svg";
import proToolsIcon from "../assets/images/icons/proToolsIcon.svg";

const skills: Skill[] = [
  // programming languages
  {
    id: "javascript",
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    category: "Dev",
    subcategory: "Language",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    category: "Dev",
    subcategory: "Language",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "python",
    name: "Python",
    icon: "devicon-python-plain",
    category: "Dev",
    subcategory: "Language",
    relatedEducation: []
  },
  {
    id: "c_sharp",
    name: "C#",
    icon: "devicon-csharp-plain",
    category: "Dev",
    subcategory: "Language",
    relatedEducation: []
  },

  // front end frameworks and libraries
  {
    id: "react",
    name: "React",
    icon: "devicon-react-original-wordmark",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "react_native",
    name: "React Native",
    icon: "devicon-react-original",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "html",
    name: "HTML",
    icon: "devicon-html5-plain-wordmark",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
  },
  {
    id: "css",
    name: "CSS",
    icon: "devicon-css3-plain-wordmark",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
  },
  {
    id: "redux",
    name: "Redux",
    icon: "devicon-redux-original",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
    group: "secondary"
  },

  // back end libraries and frameworks
  {
    id: "node",
    name: "Node",
    icon: "devicon-nodejs-plain",
    category: "Dev",
    subcategory: "Back End",
    relatedEducation: [],
  },
  {
    id: "express",
    name: "Express",
    icon: "devicon-express-original",
    category: "Dev",
    subcategory: "Back End",
    relatedEducation: [],
  },
  // database
  {
    id: "mongo_db",
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    category: "Dev",
    subcategory: "Database",
    relatedEducation: [],
  },
  {
    id: "firebase_firestore",
    name: "Firebase Firestore",
    icon: "devicon-firebase-plain",
    category: "Dev",
    subcategory: "Database",
    relatedEducation: [],
  },
  {
    id: "sql_lite",
    name: "SQLite",
    icon: "devicon-sqlite-plain",
    category: "Dev",
    subcategory: "Database",
    relatedEducation: []
  },
  //testing
  {
    id: "jest",
    name: "Jest",
    icon: "devicon-jest-plain",
    category: "Dev",
    subcategory: "Testing",
    relatedEducation: [],
  },
  {
    id: "mocha",
    name: "Mocha",
    icon: "devicon-mocha-plain",
    category: "Dev",
    subcategory: "Testing",
    relatedEducation: [],
  },
  // gengeral development
  {
    id: "github",
    name: "GitHub",
    icon: "devicon-github-original",
    category: "Dev",
    subcategory: "CI/CD",
    relatedEducation: [],
  },
  {
    id: "heroku",
    name: "Heroku",
    icon: "devicon-heroku-plain",
    category: "Dev",
    subcategory: "CI/CD",
    relatedEducation: [],
  },

  // AUDIO
  {
    id: "monitors",
    name: "Monitors",
    icon: "",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
  {
    id: "rf", 
    name: "RF Coordination",
    icon: "",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
  {
    id: "foh",
    name: "Front of House",
    icon: "",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
  {
    id: "stage_management",
    name: "Stage Management",
    icon: "",
    category: "Audio",
    subcategory: "Management",
    relatedEducation: ["belmont"]
  },
  {
    id: "production_management",
    name: "Production Management",
    icon: "",
    category: "Audio",
    subcategory: "Management",
    relatedEducation: ["belmont"]
  },
  {
    id: "ableton",
    name: "Ableton Live Programming",
    icon: abletonIcon,
    category: "Audio",
    subcategory: "Playback",
    relatedEducation: ["belmont"]
  },
  {
    id: "midi",
    name: "Midi Control Systems",
    icon: "",
    category: "Audio",
    subcategory: "Playback",
    relatedEducation: ["belmont"]
  },
  {
    id: "recording",
    name: "Recording",
    icon: "",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "pro_tools",
    name: "Pro Tools",
    icon: proToolsIcon,
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "logic",
    name: "Logic",
    icon: "",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "studio_mixing",
    name: "Recording",
    icon: "",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "live_capture",
    name: "Live Capture",
    icon: "",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
];

function getSkill(skillId: string): Skill | null {
  const index = skills.findIndex(skill => skill.id === skillId);

  if (index === -1) {
    return null;
  };

  return skills[index];
};

function getSkills(filterFn?: (skill: Skill) => Boolean): Skill[] {
  if (!filterFn) {
    return skills;
  };

  return skills.filter(filterFn);
};

const devSkills = skills.filter(skill => skill.category === "Dev");
const audioSkills = skills.filter(skill => skill.category === 'Audio');
const personalSkills = skills.filter(skill => skill.category === "Personal");

export {
  skills,
  getSkill,
  getSkills,
  devSkills,
  audioSkills,
  personalSkills
};