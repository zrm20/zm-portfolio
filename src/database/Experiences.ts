const experiences: ExperienceData[] = [
  {
    id: 'justin_moore',
    company: "Justin Moore",
    titles: ["Stage Manager", "Monitor Engineer", "Audio Tech"],
    startDate: new Date("May 1, 2013"),
    description: "I started working for country artist Justin Moore as an intern in 2013 and was later hired on as an audio tech. In 2015 I was promoted to monitor engineer. As the monitor enginer I was responsible for RF coordination, stage patch and mixing IEM's for band, artist and guests. In 2018 I was promoted to stage manager where I managed a crew of 5-12 people and coordinated with local labor unions of up to 30. I was responsible for the day-to-day operations of loading in and out 1-4 semi trucks to the stage.",
    logo: "", // TODO
    images: [], // TODO
    skills: [], // TODO
    projects: [] // TODO
  },
  {
    id: 'nomi_travel',
    company: "Nomi Travel",
    titles: ["Software Developer"],
    startDate: new Date("May 1, 2022"),
    endDate: new Date("September 1, 2022"),
    description: "Nomi Travel was a start up tech company in Nashville and my first software development position. At Nomi I was responsible for building the web app using React, as well as back-end REST services for the web app. I also built an internal database management app using a full MERN stack that managed database CRUD operations for 3 environments. I also gained experience in test driven developement, CI/CD, Heroku deployment and Git actions. Nomi was an excellent start-up with tremendous potential. The company is currently on hold, awaiting further capital.",
    logo: "", // TODO,
    images: [], // TODO
    skills: ["react", "javascript", "express", "node", "mongodb", "heroku", "react_native"],
    projects: []

  }
];

function getExperience(experienceId: string): ExperienceData | null {
  const index = experiences.findIndex(experience => experience.id === experienceId);

  if (index === -1) {
    return null;
  };

  return experiences[index];
};

export {
  experiences,
  getExperience
};