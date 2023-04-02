import trailPackProLogo from "../assets/images/projectImages/packplannerlogo.png";
import nomiLogo from "../assets/images/experienceImages/nomi_logo.png";
import mealsToGoLogo from "../assets/images/projectImages/meals_to_go_logo.png";
import zmLogo from "../assets/images/zm_logo_orange_white_name.PNG";
import zmPortfolio1 from "../assets/images/projectImages/zm_portfolio_1.jpg";
import foxAndFriends from "../assets/images/projectImages/fox_and_friends.jpg";
import brantleyTour from "../assets/images/projectImages/brantley_tour.JPG";
import mirandaTour from "../assets/images/projectImages/miranda_tour.JPG";
import bellaMoxi from "../assets/images/projectImages/bella_moxi.JPG";
import houstonRodeo from "../assets/images/projectImages/houston_rodeo.JPG";
import jimmyKimmel from "../assets/images/projectImages/jimmy_kimmel.JPG";
import mayorDebate from "../assets/images/projectImages/mayor_debate.JPG";
import mooTaping from "../assets/images/projectImages/moo_taping.jpeg";
import otbpTour from "../assets/images/projectImages/otbp_tour.jpg";
import playbackRig from "../assets/images/projectImages/playback_rig.JPG";
import southernBaptist from "../assets/images/projectImages/southern_baptists_convention.jpeg";
import todayShow from "../assets/images/projectImages/today_show.JPG";
import jmLogo from "../assets/images/experienceImages/jm_logo.png"
import memorialDay from "../assets/images/projectImages/memorial_day.JPG";
import trailPackProScreenshots from "../assets/images/projectImages/trail_pack_pro_screenshots.png";
import mealsScreenshots from "../assets/images/projectImages/meals_screenshots.png";
import { GITHUB_URL } from "../constants/urls";

const projects: Project[] = [
  {
    id: "trail_pack_pro",
    category: "Dev",
    title: "Trail Pack Pro",
    subtitle: "Mobile app for tracking camping equipment and weight",
    repo: GITHUB_URL + "/packplanner",
    description: "This was my first attempt at a solo project. As hobbyist backpacker, I found myself always writing out my inventory and weights for each backpacking trip. Everyone has their own target weight and I thought it would be nice to be able to know that weight, without having to pack all my gear up first. While apps that do this already existed, it seemed like a great opportunity to take on my first solo challenge.\nWith that, Trail Pack Pro was born - A React Native application that allows you to store your inventory of gear along with the weight. You can add that gear to your pack and view your total backpack weight. It also has features like a chart for viewing weight by category.\nMy favorite feature though, and the feature that sets this apart from other apps, is the water weight. Trail Pack Pro will automatically calculate the weight of the water you are carrying based on the total volume available by the items in your pack. You can adjust a slider to see how your weight will change as you consume water.\nWhile a TestFlight beta was released, I have not officially released Trail Pack Pro to the app store, however that is coming!",
    testFlight: "https://testflight.apple.com/join/c5UJiM4i",
    skills: ["react_native", "javascript", "typescript", "redux", "firebase", "material_ui"],
    images: [trailPackProScreenshots],
    logo: trailPackProLogo
  },
  {
    id: "zm_portfolio",
    category: "Dev",
    title: "ZM Portfolio",
    subtitle: "React built web portfolio and resume",
    repo: GITHUB_URL + "/zm-portfolio",
    description: "This is the site you are looking at right now. I wanted to use my online portfolio to demonstrate some of my styles and practices when it comes to React apps. This site uses a lot of Material UI components as well as plenty of custom built components. On the server-side it utilizes Firebase for hosting as well as serverless functions.",
    website: "https://www.zachrmccoy.com",
    skills: ["react", "javascript", "typescript", "firebase_hosting", "material_ui"],
    images: [zmPortfolio1],
    logo: zmLogo
  },
  {
    id: "nomi_web_app",
    category: "Dev",
    title: "Nomi Web App",
    subtitle: "React web app for company landing page and user account management",
    description: "At Nomi Travel, my primary responsibility was to build the web based front-end. Nomi is a SMS based service that personalizes local search. Starting in Nashville, TN users could text Nomi with \"Where can I get coffee\" and rather than sifting through traditional chain companies, they would receive a local and personal recommendation.\nNomi's website was built in React and is primarily a landing page for new users and company information. Users can sign up for the service with just a phone number and a verification code and receive their first recommendation in just minutes.\nThe backend of Nomi involved connecting to multiple external API's such as Twilio, Google and others.",
    skills: ["react", "redux", "javascript", "node", "express", "mongo_db", "material_ui"],
    images: [nomiLogo],
    logo: nomiLogo,
    experienceId: "nomi"
  },
  {
    id: "nomi_activity_manager",
    category: "Dev",
    title: "Nomi Activity Manager",
    subtitle: "A web dashboard for Nomi employees offering database CRUD operations",
    description: "At Nomi, I also was responsible for building an internal app for database management. A major part of Nomi is the refined list of restaurants and nightlife activities. It was critical for our team that all members could add and modify these places in our database, without needing to understand MongoDB or any code.\nThe database management app offered full CRUD functionality for multiple data resources across three environments using a full MERN stack.",
    skills: ["react", "redux", "javascript", "node", "express", "mongo_db", "material_ui"],
    images: [nomiLogo],
    logo: nomiLogo,
    experienceId: "nomi"
  },
  {
    id: "nomi_mobile_app",
    category: "Dev",
    title: "Nomi Mobile App",
    subtitle: "A mobile app offering personalized restaurant and entertainment suggestions",
    description: "The Nomi mobile app is a cross platform mobile app with a full dashboard of personalized recommendations. Users register and participate in a 3 question personality survey and then receive restaurant recommendations tailored for them.",
    skills: ["react_native", "firebase", "javascript", "material_ui"],
    images: [nomiLogo],
    logo: nomiLogo,
    experienceId: "nomi"
  },
  {
    id: "meals_to_go",
    category: "Dev",
    title: "Meals to Go",
    subtitle: "A Udemy course project for React Native",
    description: "As part of a React Native Udemy course, this code along project built a full mobile app for restaurant search by location. Using Firebase authentication users could sign up and search for places and favorite them.\nWhile the end result is not connected to the Google Places API, a mock API call is made to return placeholder data for demo purposes. User account data is also stored locally on the device for offline use.\nWhile the UI of this app is exactly the same as the instructors app in the course, I took several liberties in the code architecture as well as the use of custom hooks.",
    skills: ["react_native", "firebase", "javascript", "material_ui"],
    images: [mealsScreenshots],
    repo: GITHUB_URL + "/MealsToGo",
    logo: mealsToGoLogo
  },

  // AUDIO PROJECTS (shows, events... etc)
  {
    id: "moo_taping",
    category: "Audio",
    title: "Justin Moore Live Stream Event",
    subtitle: "A pandemic approach to concerts - bringing a live show to stream",
    description: "While touring was shutdown in all of 2020 artists looked to other avenues to bring music to fans. For this even we did a live stream concert with full 4k video production.",
    skills: ["monitors", "live_capture", "rf"],
    images: [mooTaping],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
  {
    id: "sba",
    category: "Audio",
    title: "Southern Baptist's Convention",
    subtitle: "A large convention held at Music City Center in Nashville",
    description: "This show had a lot of moving parts to it, but by far the most complex part was mixing FOH for a live orchestra along with a church band.",
    skills: ["foh", "rf"],
    images: [southernBaptist],
    logo: zmLogo,
    experienceId: "freelance_audio"
  },
  {
    id: "memorial_day",
    category: "Audio",
    title: "Justin Performs Live at the U.S. Capitol",
    subtitle: "A Memorial Day performance of \"The Ones That Didn't Make it Back Home\"",
    description: "The Memorial Day concert is a huge event in Washington D.C.. It was hot and humid as we setup on a small stage in front of the U.S. Capitol to perform the recently peaked #1 song \"The Ones That Didn't Make it Back Home\".",
    images: [memorialDay],
    skills: ["stage_management"],
    logo: jmLogo,
    website: "https://www.youtube.com/watch?v=AZIQI3pnAEw",
    experienceId: "justin_moore" 
  },
  {
    id: "fox_and_friends",
    category: "Audio",
    title: "Justin Moore on Fox and Friends",
    subtitle: "Mixed monitors for a live performance during the release of the Late Nights and Longnecks album",
    description: "Justin has performed on Fox and Friends numerous times. This photo was taken back stage before the on air performance of his latest single at the time \"The Ones Who Didn't Make It Back Home\".",
    skills: ["monitors", "stage_management"],
    images: [foxAndFriends],
    logo: jmLogo,
    website: "https://www.youtube.com/watch?v=TyUQypfs3TY",
    experienceId: "justin_moore" 
  },
  {
    id: "playback_rig",
    category: "Audio",
    title: "Justin Moore's Live Playback Rig",
    subtitle: "A MIDI controlled redundant playback system",
    description: "As part of the \"Kinda Don't Care\" album, the band needed several electronic parts added to supplement the songs. This meant putting together a live playback system. Because it was considered show critical, it was important that this system have a fully redundant backup. I built and programmed this rig with (2) 2013 MacBook Pros, Ableton Live 8 and a Radial SW-8 switcher. It handles playback of 3 stereo pairs, a click track, plus a timecode track. The timecode is used for automating the light show along with the song.",
    images: [playbackRig],
    logo: jmLogo,
    skills: ["ableton"],
    experienceId: "justin_moore" 
  },
  {
    id: "jimmy_kimmel",
    category: "Audio",
    title: "Justin Moore on Jimmy Kimmel Live!",
    subtitle: "Justin performed \"Somebody Else Will\"",
    description: "As \"Somebody Else Will\" approached #1 on the charts, Justin performed on Jimmy Kimmel Live in Hollywood, CA. A large part of making his performance happen was the use of  a live playback rig using Ableton to send timecode for camera blocking.",
    skills: ["ableton"],
    images: [jimmyKimmel],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
  {
    id: "brantley",
    category: "Audio",
    title: "Brantley Gilbert Take it Outside Tour",
    subtitle: "Monitor engineer for Justin Moore as direct support for Brantley Gilbert",
    description: "This was a fun tour to be a part of. Brantley's \"Take it Outside\" tour was a summer of sold out amphitheaters and brought me to Red Rocks and Alaska for the first time.",
    skills: ["monitors", "rf"],
    images: [brantleyTour],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
  {
    id: "today_show",
    category: "Audio",
    title: "Justin Moore on The Today Show",
    subtitle: "Justin performs \"Somebody Else Will\" on the Today Show",
    description: "As part of the release of the \"Kinda Don't Care\" album we did a number of TV appearances in NYC. We finished it off at The Today show on NBC. On TV appearances like these, my job is to serve as the middle man between our band and the Today Show's monitor engineer",
    skills: ["monitors", "rf"],
    images: [todayShow],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
  {
    id: "miranda",
    category: "Audio",
    title: "Miranda Lambert Platinum Tour",
    subtitle: "Monitor engineer for Justin Moore as direct support for Miranda Lambert",
    description: "The Miranda Lambert tour in 2015 was my biggest tour at the time. In my first tour as the monitor engineer I had the privilege of working with some great people and was also able to do a show at Madison Square Garden for the first time.",
    skills: ["monitors", "rf"],
    images: [mirandaTour],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
  {
    id: "bella_moxi",
    category: "Audio",
    title: "Bella Moxi Dance Competition",
    subtitle: "FOH for a Kentucky Dance Competition",
    description: "This event was managed by Orange Thread Media who hired me as a FOH contractor. Typically on corporate shows in hotels, it usually means a couple of podium and wireless mics for keynote speakers. This one was different though. For this dance competition we had the room rockin' with 6 d&b B2 subs. The whole hotel was dancing along I'm sure.",
    skills: ["foh"],
    images: [bellaMoxi],
    logo: zmLogo,
    experienceId: "freelance_audio"
  },
  {
    id: "houston_rodeo",
    category: "Audio",
    title: "Justin Moore at the Houston Rodeo",
    subtitle: "A crowd of over 60k, one of my largest shows to date",
    description: "The Houston Rodeo is a huge event that features a concert at the end of each day. Many artists have had the privilege of playing here and we joined that group in 2019. Mixing monitors in front of 60,000 people is a surreal feeling. The show featured a rotating stage with a massive ground supported video wall below the arena jumbotron.",
    skills: ["monitors", "rf"],
    images: [houstonRodeo],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
  {
    id: "mayor_debate",
    category: "Audio",
    title: "Nashville Mayor's Debate",
    subtitle: "Live to local news mayoral debate",
    description: "Held at Belmont University, I got the call to mix the Nashville Mayoral Debate. This was a challenge as it required 6-8 lav mics to be live on stage at once which can be difficult to avoid feedback with. It was also a last minute surprise for me that I needed to have a broadcast mix sent out to multiple TV trucks to go to air.",
    skills: ["foh", "live_capture", "rf"],
    images: [mayorDebate],
    logo: zmLogo,
  },
  {
    id: "otbp",
    category: "Audio",
    title: "Justin Moore: Off The Beaten Path Tour",
    subtitle: "My first full production tour as a monitor tech",
    description: "This was my first arena tour and it was a very memorable one. I had the opportunity to take in the experience of loading 3 trucks in and out. I also got to work with some excellent opening act crews like Randy Houser, Thomas Rhett and Josh Thompson. On the second leg of tour I also had the opportunity to mix FOH for one of our opening acts, Jordan Rager.",
    skills: ["monitors", "rf", "foh"],
    images: [otbpTour],
    logo: jmLogo,
    experienceId: "justin_moore" 
  },
];

function getProject(projectId: string | undefined): Project | null {
  if(!projectId) {
    return null;
  };
  
  const index = projects.findIndex(project => project.id === projectId);

  if (index === -1) {
    return null;
  };

  return projects[index];
};

function getProjects(filterFn?: (project: Project) => boolean): Project[] {
  if (!filterFn) {
    return projects;
  };
  return projects.filter(filterFn);
};

const devProjects = projects.filter(proj => proj.category === "Dev");
const audioProjects = projects.filter(proj => proj.category === "Audio");

export {
  projects,
  getProject,
  getProjects,
  devProjects,
  audioProjects
};