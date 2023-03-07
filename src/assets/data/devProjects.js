import nomiLogo from '../images/nomi_plain.png';
import zmPortfolioImage from '../images/zmPortfolio.jpg';
import trailPackProLogo from '../images/packplannerlogo.png'
import reelRockSplash from '../images/reelRockSplash.png';

const devProjects = 
[
  {
    name: 'Trail Pack Pro',
    subtitle: 'Mobile app for tracking camping equipment and weight.',
    description: 'This was my first attempt at a solo project. As hobbyist backpacker, I found myself always writing out my inventory and weights for each backpacking trip. Everyone has their own target weight and I thought it would be nice to be able to know that weight, without having to pack all my gear up first. While apps that do this already existed, it seemed like a great opportunity to take on my first solo challenge.\nWith that, Trail Pack Pro was born - A React Native application that allows you to store your inventory of gear along with the weight. You can add that gear to your pack and view your total backpack weight. It also has features like a chart for viewing weight by category.\nMy favorite feature though, and the feature that sets this apart from other apps, is the water weight. Trail Pack Pro will automatically calculate the weight of the water you are carrying based on the total volume available by the items in your pack. You can adjust a slider to see how your weight will change as you consume water.\nWhile a TestFlight beta was released, I have not officially released Trail Pack Pro to the app store, however that is coming!',
    stack: [
      'React',
      'React Native',
      'Redux'
    ],
    image: trailPackProLogo,
    repo: 'https://github.com/zrm20/packplanner',
    appStore: 'https://testflight.apple.com/join/c5UJiM4i'
  },
  {
    name: 'Reel Rock Climber',
    subtitle: 'A rock climbing app for tracking climbs and competing with other climbers.',
    description: "This is my current full stack hobby project. Reel Rock Climber is an app for logging rock climbing sessions. But it is more than just a logbook. Reel Rock Climber makes climbing sessions competitive, social and fun. By giving users a score for every route they can challenge themselves to up their overall stats and set personal climbing goals for every session. The social feature allows you to see how compare to other climbers at your crag, or on a specific route.\nThis app is being built using React for the front end, and a Node/Express/Mongo backend for a full MERN stack. Future plans for this project also include a React Native iOS and Android built, connecting to the same Express REST API backend.",
    stack: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Heroku',
      'Redux',
      'MaterialUI'
    ],
    image: reelRockSplash
  },
  {
    name: 'ZM Online Portfolio',
    subtitle: 'This is the site you are looking at! My online portfolio for software and audio skills.',
    description: 'This poject is almost entirely a React project. This web-app was built to be able to dynamically update my portfolio and resume. If you check out the source code, all of the information on this page and others is stored as JS objects in the assets folder. While this data could also be stored in a database, the information does not change often enough to make that necessary.\n\nThe UI is all done using Material UI version 5 with the Emotion style engine. This is particularly useful for a mobile first design as well as dynamic styles. For example, looking at the resume page, the formatting will change slightly while printing. This is done by passing a forPrint prop to all of the components within the resume component.\n\nWhile this project is served by a Node.js Express server, it is a very simple server. Currently it staticly serves the React app and that is all. Future updates will include more features that require a backend API.',
    stack: [
      'React',
      'MaterialUI',
      'Express',
      'Node'
    ],
    image: zmPortfolioImage,
    repo: 'https://github.com/zrm20/zm-portfolio',
    website: 'https://www.zachrmccoy.com'
  },
  {
    name: 'Nomi Travel',
    subtitle: 'Web app for service signup and account management.',
    description: "At Nomi Travel, my primary responsibility was to build the web based front-end. Nomi is a SMS based service that personalizes local search. Starting in Nashville, TN users could text Nomi with \"Where can I get coffee\" and rather than sifting through traditional chain companies, they would receive a local and personal recommendation.\nNomi's website was built in React and is primarily a landing page for new users. Users can sign up for the service with just a phone number and a verification code and receive their first recommendation in just minutes.\nThe backend of Nomi involved connecting to multiple external API's such as Twilio, Google and others.",
    stack: [
      'React',
      'Redux',
      'Node',
      'Express',
      'MongoDB'
    ],
    image: nomiLogo,
    website: 'https://www.nomitravel.com'
  },
  {
    name: 'Nomi Travel - Internal App',
    subtitle: 'Web app for database management operations.',
    description: "At Nomi, I also was responsible for building an internal app for database management. A major part of Nomi is the refined list of restaurants and nightlife activities. It was critical for our team that all members of the team could add and modify these places in our database, without needing to understand MongoDB or any code.\nThe database manager app offered full CRUD functionality for multiple data resources across three environments using a full MERN stack.",
    stack: [
      'React',
      'Redux',
      'Node',
      'Express',
      'MongoDB'
    ],
    image: nomiLogo
  },
  
];

export default devProjects;