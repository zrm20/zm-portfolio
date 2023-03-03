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
    icon: "react",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "react_native",
    name: "React Native",
    icon: "react",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "html",
    name: "HTML",
    icon: "language-html5",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
  },
  {
    id: "css",
    name: "CSS",
    icon: "language-css3",
    category: "Dev",
    subcategory: "Front End",
    relatedEducation: [],
  },
  {
    id: "redux",
    name: "Redux",
    icon: "code-braces-box",
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
  // audio
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

export {
  skills,
  getSkill,
  getSkills
};