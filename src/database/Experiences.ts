import jmLogo from "../assets/images/experienceImages/jm_logo.png";
import nomiLogo from "../assets/images/experienceImages/nomi_logo.png";
import zmLogo from "../assets/images/zm_logo_orange_black.PNG";

const experiences: Experience[] = [
  {
    id: 'justin_moore',
    category: "Audio",
    company: "Justin Moore",
    titles: ["Stage Manager", "Monitor Engineer", "Audio Tech"],
    startDate: new Date("May 1, 2013"),
    description: "I started working for country artist Justin Moore as an intern in 2013 and was later hired on as an audio tech. In 2015 I was promoted to monitor engineer. As the monitor enginer I was responsible for RF coordination, stage patch and mixing IEM's for band, artist and guests. In 2018 I was promoted to stage manager where I managed a crew of 5-12 people and coordinated with local labor unions of up to 30. I was responsible for the day-to-day operations of loading in and out 1-4 semi trucks to the stage.",
    logo: jmLogo,
    images: [], // TODO
    skills: ["monitors", "rf", "stage_management", "ableton", "midi"],
    projects: [] // TODO
  },
  {
    id: 'nomi_travel',
    category: "Dev",
    company: "Nomi Travel",
    titles: ["Software Developer"],
    startDate: new Date("May 1, 2022"),
    endDate: new Date("September 1, 2022"),
    description: "Nomi Travel was a start up tech company in Nashville and my first software development position. At Nomi I was responsible for building the web app using React, as well as back-end REST services for the web app. I also built an internal database management app using a full MERN stack that managed database CRUD operations for 3 environments. I also gained experience in test driven developement, CI/CD, Heroku deployment and Git actions. Nomi was an excellent start-up with tremendous potential. The company is currently on hold, awaiting further capital.",
    logo: nomiLogo,
    images: [], // TODO
    skills: ["react", "javascript", "express", "node", "mongodb", "heroku", "react_native"],
    projects: []

  },
  {
    id: 'freelance_audio',
    category: "Audio",
    company: "ZM Engineering",
    titles: ["Audio Engineer"],
    startDate: new Date("September 1, 2011"),
    description: "In my freelance work as an audio engineer, I have been contracted through many companies including CTS Audio, Special Event Services, OrangeThread Media and more. Most commonly my role has been either FOH engineer or monitor engineer but I have also been hired for patch, systems and RF coordination. With CTS and SES I have worked various concerts, festivals and other musical events. With OrangeThread I have worked many corporate events both in Nashville and in surrounding areas.",
    logo: zmLogo,
    images: [],
    skills: ["foh", "monitors", "production_management"],
    projects: []
  }
];

function getExperience(experienceId: string): Experience | null {
  const index = experiences.findIndex(experience => experience.id === experienceId);

  if (index === -1) {
    return null;
  };

  return experiences[index];
};

function getExperiences(filterFn?: (experience: Experience) => boolean): Experience[] {
  if (!filterFn) {
    return experiences;
  };

  return experiences.filter(filterFn);
};

export {
  experiences,
  getExperience,
  getExperiences
};