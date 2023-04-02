// Icons can be chosen from ..
// Dev Icons: https://devicon.dev
// Font awesome: https://fontawesome.com/search?o=r&m=free

const skills: Skill[] = [
  // programming languages
  {
    id: "javascript",
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    category: "Dev",
    subcategory: "Language",
    relatedEducation: ["web_development_bootcamp", "nodejs", "js_unit_testing", "mern", "react_native"],
    group: "primary"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    category: "Dev",
    subcategory: "Language",
    relatedEducation: ["typescript"],
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
    icon: "devicon-react-original",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: ["mern"],
    group: "primary"
  },
  {
    id: "react_native",
    name: "React Native",
    icon: "devicon-react-original-wordmark",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: ["react_native"],
    group: "primary"
  },
  {
    id: "html",
    name: "HTML",
    icon: "devicon-html5-plain-wordmark",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: ["web_development_bootcamp"],
  },
  {
    id: "css",
    name: "CSS",
    icon: "devicon-css3-plain-wordmark",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: ["web_development_bootcamp"],
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
  {
    id: "material_ui",
    name: "Material UI",
    icon: "devicon-materialui-plain",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
    group: "secondary"
  },
  {
    id: 'bootstrap',
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: ["web_development_bootcamp"],
    group: "secondary"
  },

  // back end libraries and frameworks
  {
    id: "node",
    name: "Node",
    icon: "devicon-nodejs-plain",
    category: "Dev",
    subcategory: "Back End",
    relatedEducation: ["web_development_bootcamp", "nodejs"],
  },
  {
    id: "express",
    name: "Express",
    icon: "devicon-express-original",
    category: "Dev",
    subcategory: "Back End",
    relatedEducation: ["web_development_bootcamp", "nodejs", "mern"],
  },
  // database
  {
    id: "mongo_db",
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    category: "Dev",
    subcategory: "Database",
    relatedEducation: ["web_development_bootcamp", "nodejs", "mern"],
  },
  {
    id: "firebase_firestore",
    name: "Firebase",
    icon: "devicon-firebase-plain",
    category: "Dev",
    subcategory: "Database",
    relatedEducation: ["react_native"],
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
    relatedEducation: ["js_unit_testing"],
  },
  {
    id: "mocha",
    name: "Mocha",
    icon: "devicon-mocha-plain",
    category: "Dev",
    subcategory: "Testing",
    relatedEducation: ["js_unit_testing", "nodejs"],
  },
  // general development
  {
    id: "github",
    name: "GitHub",
    icon: "devicon-github-original",
    category: "Dev",
    subcategory: "CI/CD",
    relatedEducation: ["git"],
  },
  {
    id: "heroku",
    name: "Heroku",
    icon: "devicon-heroku-plain",
    category: "Dev",
    subcategory: "CI/CD",
    relatedEducation: [],
  },
  {
    id: "firebase_hosting",
    name: "Firebase Hosting",
    icon: "devicon-firebase-plain",
    category: "Dev",
    subcategory: "CI/CD",
    relatedEducation: [],
  },

  // AUDIO
  {
    id: "monitors",
    name: "Monitors",
    icon: "fa-solid fa-headphones",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
  {
    id: "rf", 
    name: "RF Coordination",
    icon: "fa-solid fa-tower-broadcast",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
  {
    id: "foh",
    name: "Front of House",
    icon: "fa-solid fa-sliders",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
  {
    id: "stage_management",
    name: "Stage Management",
    icon: "fa-solid fa-clipboard-list",
    category: "Audio",
    subcategory: "Management",
    relatedEducation: ["belmont"]
  },
  {
    id: "production_management",
    name: "Production Management",
    icon: "fa-solid fa-people-roof",
    category: "Audio",
    subcategory: "Management",
    relatedEducation: ["belmont"]
  },
  {
    id: "ableton",
    name: "Ableton Live Programming",
    icon: "fa-solid fa-circle-play",
    category: "Audio",
    subcategory: "Playback",
    relatedEducation: ["belmont"]
  },
  {
    id: "midi",
    name: "Midi Control Systems",
    icon: "fa-solid fa-gamepad",
    category: "Audio",
    subcategory: "Playback",
    relatedEducation: ["belmont"]
  },
  {
    id: "recording",
    name: "Recording",
    icon: "fa-solid fa-record-vinyl",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "pro_tools",
    name: "Pro Tools",
    icon: "fa-solid fa-file-audio",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "logic",
    name: "Logic",
    icon: "fa-brands fa-apple",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "studio_mixing",
    name: "Studio Mixing",
    icon: "fa-solid fa-music",
    category: "Audio",
    subcategory: "Studio",
    relatedEducation: ["belmont"]
  },
  {
    id: "live_capture",
    name: "Live Capture",
    icon: "fa-solid fa-microphone",
    category: "Audio",
    subcategory: "Live",
    relatedEducation: ["belmont"]
  },
];

function getSkill(skillId: string | undefined): Skill | null {
  if(!skillId) {
    return null;
  };

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