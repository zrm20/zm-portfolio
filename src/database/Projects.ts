import trailPackProLogo from "../assets/images/packplannerlogo.png";

const projects: Project[] = [
  {
    id: "trail_pack_pro",
    category: "Dev",
    title: "Trail Pack Pro",
    subtitle: "Mobile app for tracking camping equiment and weight",
    repo: "https://www.github.com/zrm20/packplanner",
    description: "This was my first attempt at a solo project. As hobbyist backpacker, I found myself always writing out my inventory and weights for each backpacking trip. Everyone has their own target weight and I thought it would be nice to be able to know that weight, without having to pack all my gear up first. While apps that do this already existed, it seemed like a great oppertunity to take on my first solo challenge.\nWith that, Trail Pack Pro was born - A React Native application that allows you to store your inventory of gear along with the weight. You can add that gear to your pack and view your total backpack weight. It also has features like a chart for viewing weight by category.\nMy favorite feature though, and the feature that sets this apart from other apps, is the water weight. Trail Pack Pro will automatically calculate the weight of the water you are carrying based on the total volume available by the items in your pack. You can adjust a slider to see how your weight will change as you consume water.\nWhile a TestFlight beta was released, I have not officially released Trail Pack Pro to the app store, however that is coming!",
    testFlight: "https://testflight.apple.com/join/c5UJiM4i",
    skills: ["react_native", "javascript", "typescript", "redux", "firebase"],
    images: [trailPackProLogo],
    logo: trailPackProLogo
  },
  {
    id: "zm_portfolio",
    category: "Dev",
    title: "ZM Portfolio",
    subtitle: "React built web portfolio and resume",
    repo: "https://www.github.com/zrm20/zm-portfolio",
    description: "This was my first attempt at a solo project. As hobbyist backpacker, I found myself always writing out my inventory and weights for each backpacking trip. Everyone has their own target weight and I thought it would be nice to be able to know that weight, without having to pack all my gear up first. While apps that do this already existed, it seemed like a great oppertunity to take on my first solo challenge.\nWith that, Trail Pack Pro was born - A React Native application that allows you to store your inventory of gear along with the weight. You can add that gear to your pack and view your total backpack weight. It also has features like a chart for viewing weight by category.\nMy favorite feature though, and the feature that sets this apart from other apps, is the water weight. Trail Pack Pro will automatically calculate the weight of the water you are carrying based on the total volume available by the items in your pack. You can adjust a slider to see how your weight will change as you consume water.\nWhile a TestFlight beta was released, I have not officially released Trail Pack Pro to the app store, however that is coming!",
    website: "https://www.zachrmccoy.com",
    skills: ["javascript", "typescript", "firebase"],
    images: []
  },
  {
    id: "nomi_web_app",
    category: "Dev",
    title: "Nomi Web App",
    subtitle: "React web app for company landing page and user account management",
    description: "At Nomi Travel, my primary responsibility was to build the web based front-end. Nomi is a SMS based service that personalizes local search. Starting in Nashille, TN users could text Nomi with \"Where can I get coffee\" and rather than sifting through traditional chain companies, they would receive a local and personal recommendation.\nNomi's website was built in React and is primarily a landing page for new users and company information. Users can sign up for the service with just a phone number and a verification code and recieve their first recommendation in just minutes.\nThe backend of Nomi involved connecting to multiple external API's such as Twilio, Google and others.",
    skills: ["react", "redux", "javascipt", "node", "express", "mongo_db"],
    images: []
  },
  {
    id: "nomi_activity_manager",
    category: "Dev",
    title: "Nomi Activity Manager",
    subtitle: "A web dashboard for Nomi employees offering database CRUD operations",
    description: "At Nomi, I also was responsible for building an internal app for database management. A major part of Nomi is the refined list of restaraunts and nightlife activities. It was critical for our team that all members could add and modify these places in our database, without needing to understand MongoDB or any code.\nThe database managagement app offered full CRUD functionality for multiple data resources across three environments using a full MERN stack.",
    skills: ["react", "redux", "javascipt", "node", "express", "mongo_db"],
    images: []
  },
  {
    id: "nomi_mobile_app",
    category: "Dev",
    title: "Nomi Mobile App",
    subtitle: "A mobile app for consumers offering personalized restaurant and entertainment suggestions",
    description: "The Nomi mobile app is a cross platform mobile app with a full dashboard of personalized recommendations. Users register and participate in a 3 question personality survey and then recieve restaurant recommendations tailored for them.",
    skills: ["react_native", "firebase", "javascript"],
    images: []
  },
  {
    id: "meals_to_go",
    category: "Dev",
    title: "Meals to Go",
    subtitle: "A Udemy course project for React Native",
    description: "As part of a React Native Udemy course, this code along prooject built a full mobile app for restaurant search by location. Using Firebase authentication users could sign up and search for places and favorite them.\nWhile the end result is not connected to the Google Places API, a mock API call is made to return placeholder data for demo purposes. User account data is also stored locally on the device for offline use.\nWhile the UI of this app is exactly the same as the instructors app in the course, I took several liberties in the code architecture as well as the use of custom hooks.",
    skills: ["react_native", "firebase", "javascript"],
    images: [],
    repo: "https://github.com/zrm20/MealsToGo"
  }
];

function getProject(projectId: string): Project | null {
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

export {
  projects,
  getProject,
  getProjects
};