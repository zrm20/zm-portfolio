import jmLogo from "../assets/images/experienceImages/jm_logo.png";
import nomiLogo from "../assets/images/experienceImages/nomi_logo.png";
import zmLogo from "../assets/images/zm_logo_orange_black.PNG";
import emboldLogo from "../assets/images/experienceImages/embold_logo.jpeg";

const experiences: Experience[] = [
  {
    id: 'embold',
    category: 'Dev',
    company: "Embold Health",
    titles: ['Software Developer'],
    startDate: new Date("June 5, 2023"),
    description: "At Embold Health, my role on the software development team is to primary focus on a front-end React application. The application features advances React concepts and Redux state management. With all of my contributions to the project, I strive to write and maintain components in a modular fashion and follow all best practices for keeping code DRY and reusable.",
    logo: emboldLogo,
    images: [],
    skills: ["react", "redux", "python", "material_ui"],
    url: "https://www.emboldhealth.com"
  },
  {
    id: 'justin_moore',
    category: "Audio",
    company: "Justin Moore",
    titles: ["Stage Manager", "Monitor Engineer", "Audio Tech"],
    startDate: new Date("May 1, 2013"),
    endDate: new Date("June 16, 2023"),
    description: "I started working for country artist Justin Moore as an intern in 2013 and was later hired on as an audio tech. In 2015 I was promoted to monitor engineer. As the monitor engineer I was responsible for RF coordination, stage patch and mixing IEM's for band, artist and guests. In 2018 I was promoted to stage manager where I managed a crew of 5-12 people and coordinated with local labor unions of up to 30. I was responsible for the day-to-day operations of loading in and out 1-4 semi trucks to the stage.",
    logo: jmLogo,
    images: [], // TODO
    skills: ["monitors", "rf", "stage_management", "ableton", "midi"],
    url: "https://www.justinmooremusic.com"
  },
  {
    id: 'nomi',
    category: "Dev",
    company: "Nomi Travel",
    titles: ["Software Developer"],
    startDate: new Date("May 1, 2022"),
    endDate: new Date("September 1, 2022"),
    description: 
      `At Nomi Travel, I worked as a Full Stack Developer, responsible for building a web application using React and developing back-end REST services with Node.js, Express and MongoDB. I gained experience in creating reusable React components on the front-end, and a maintainable MVC architecture on the back-end.  I implemented test-driven development using Jest, ensuring acceptable code coverage. Nomi helped me develop a thorough understanding of React and its core principles as well as DevOps experience implementing CI/CD using Heroku and GitHub actions. At the fast paced startup environment we practiced Agile methodology and worked to prioritize tasks while remaining flexible.`,
    logo: nomiLogo,
    images: [], // TODO
    skills: ["react", "javascript", "express", "node", "mongodb", "heroku", "react_native"],
    url: "https://www.nomitravel.com"
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
  }
];

function getExperience(experienceId: string | undefined): Experience | null {
  if(!experienceId) {
    return null;
  };
  
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