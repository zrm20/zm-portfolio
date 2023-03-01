const skills: Skill[] = [
  // programming languages
  {
    id: "javascript",
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    category: "Language",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    category: "Language",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "python",
    name: "Python",
    icon: "devicon-python-plain",
    category: "Language",
    relatedEducation: []
  },
  {
    id: "c_sharp",
    name: "C#",
    icon: "devicon-csharp-plain",
    category: "Language",
    relatedEducation: []
  },

  // front end frameworks and libraries
  {
    id: "react",
    name: "React",
    icon: "react",
    category: "Front End",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "react_native",
    name: "React Native",
    icon: "react",
    category: "Front End",
    relatedEducation: [],
    group: "primary"
  },
  {
    id: "html",
    name: "HTML",
    icon: "language-html5",
    category: "Front End",
    relatedEducation: [],
  },
  {
    id: "css",
    name: "CSS",
    icon: "language-css3",
    category: "Front End",
    relatedEducation: [],
  },
  {
    id: "redux",
    name: "Redux",
    icon: "code-braces-box",
    category: "Front End",
    relatedEducation: [],
    group: "secondary"
  },

  // back end libraries and frameworks
  {
    id: "node",
    name: "Node",
    icon: "devicon-nodejs-plain",
    category: "Back End",
    relatedEducation: [],
  },
  {
    id: "express",
    name: "Express",
    icon: "devicon-express-original",
    category: "Back End",
    relatedEducation: [],
  },
  // database
  {
    id: "mongo_db",
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    category: "Database",
    relatedEducation: [],
  },
  {
    id: "firebase_firestore",
    name: "Firebase Firestore",
    icon: "devicon-firebase-plain",
    category: "Database",
    relatedEducation: [],
  },
  //testing
  {
    id: "jest",
    name: "Jest",
    icon: "devicon-jest-plain",
    category: "Testing",
    relatedEducation: [],
  },
  {
    id: "mocha",
    name: "Mocha",
    icon: "devicon-mocha-plain",
    category: "Testing",
    relatedEducation: [],
  },
  // gengeral development
  {
    id: "github",
    name: "GitHub",
    icon: "devicon-github-original",
    category: "Development",
    relatedEducation: [],
  },
  {
    id: "heroku",
    name: "Heroku",
    icon: "devicon-heroku-plain",
    category: "Development",
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

function getSkills(filterFn?: (SkillData) => Boolean): Skill[] {
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