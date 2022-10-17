import nomiLogo from '../images/nomi_plain.png'
import zmLogo from '../images/zm_logo_orange_white_name.PNG';

const devExperiences = 
[
  {
    name: 'Nomi Travel',
    title: 'Software Developer',
    description: 'I was hired at Nomi Travel in May of 2022. It was my first job as a software developer. I was initially hired on as a frontend developer, in charge of building out the web app from scratch using React. \nNomi is a platform for SMS-based local recommendations. For example, you are visiting Nashville and looking for a "craft brewery" or a "fancy dinner" you could simply text Nomi and ask for that and recieve personalized recommendation.\n My role at the company expanded during my time there eventually leading to me taking on more of a full-stack role. I was responsible for developing two projects: 1 - The main web app for users to signup and use the platform, and 2 - an internal application for database management. In both projects I executed the code, testing and deployment of the front-end React app and the backend Express REST API using a full MERN stack.\nNomi was an excellent experience builder for me and allowed me to build skills quickly. The company went on hold in September of 2022 while awaiting futher investments.',
    image: nomiLogo,
    range: '2022'
  },
  {
    name: 'Independant Developer',
    title: 'Full Stack Developer',
    image: zmLogo,
    description: 'As an independant developer I have worked on a number of personal projects. My primary focus has been around Trail Pack Pro and Reel Rock Climber.\n Trail Pack Pro is a front-end only mobile app for tracking backpacking inventory and weight. Reel Rock Climber is a full stack web and mobile application currently in development. It allows rock climbers to track and share their climbing experiences and compete with others.'
  }
];

export default devExperiences;