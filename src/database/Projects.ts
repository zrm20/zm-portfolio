const projects: Project[] = [
  {
    id: "trail_pack_pro",
    title: "Trail Pack Pro",
    subtitle: "Mobile app for tracking camping equiment and weight.",
    repo: "https://www.github.com/zrm20/packplanner",
    description: "This was my first attempt at a solo project. As hobbyist backpacker, I found myself always writing out my inventory and weights for each backpacking trip. Everyone has their own target weight and I thought it would be nice to be able to know that weight, without having to pack all my gear up first. While apps that do this already existed, it seemed like a great oppertunity to take on my first solo challenge.\nWith that, Trail Pack Pro was born - A React Native application that allows you to store your inventory of gear along with the weight. You can add that gear to your pack and view your total backpack weight. It also has features like a chart for viewing weight by category.\nMy favorite feature though, and the feature that sets this apart from other apps, is the water weight. Trail Pack Pro will automatically calculate the weight of the water you are carrying based on the total volume available by the items in your pack. You can adjust a slider to see how your weight will change as you consume water.\nWhile a TestFlight beta was released, I have not officially released Trail Pack Pro to the app store, however that is coming!",
    url: "https://testflight.apple.com/join/c5UJiM4i",
    skills: ["react_native", "javascript", "typescript", "redux", "firebase"],
    images: []
  },
  {
    id: "zm_portfolio",
    title: "ZM Portfolio",
    subtitle: "A rock climbing app for tracking climbs and competing with other climbers.",
    repo: "https://www.github.com/zrm20/zm-portfolio",
    description: "This was my first attempt at a solo project. As hobbyist backpacker, I found myself always writing out my inventory and weights for each backpacking trip. Everyone has their own target weight and I thought it would be nice to be able to know that weight, without having to pack all my gear up first. While apps that do this already existed, it seemed like a great oppertunity to take on my first solo challenge.\nWith that, Trail Pack Pro was born - A React Native application that allows you to store your inventory of gear along with the weight. You can add that gear to your pack and view your total backpack weight. It also has features like a chart for viewing weight by category.\nMy favorite feature though, and the feature that sets this apart from other apps, is the water weight. Trail Pack Pro will automatically calculate the weight of the water you are carrying based on the total volume available by the items in your pack. You can adjust a slider to see how your weight will change as you consume water.\nWhile a TestFlight beta was released, I have not officially released Trail Pack Pro to the app store, however that is coming!",
    url: "https://www.zachrmccoy.com",
    skills: ["javascript", "typescript", "firebase"],
    images: []
  },
  {
    id: "nomi_web_app",
    title: "Nomi Web App",
    subtitle: "Primary web app for Nomi Travel, handling company home page and account management.",
    description: "At Nomi Travel, my primary responsibility was to build the web based front-end. Nomi is a SMS based service that personalizes local search. Starting in Nashille, TN users could text Nomi with \"Where can I get coffee\" and rather than sifting through traditional chain companies, they would receive a local and personal recommendation.\nNomi's website was built in React and is primarily a landing page for new users. Users can sign up for the service with just a phone number and a verification code and recieve their first recommendation in just minutes.\nThe backend of Nomi involved connecting to multiple external API's such as Twilio, Google and others.",
    skills: ["react", "redux", "javascipt", "node", "express", "mongo_db"],
    images: []
  },
  {
    id: "nomi_activity_manager",
    title: "Nomi Activity Manager",
    subtitle: "A web dashboard for Nomi employees offering database CRUD operations",
    description: "At Nomi, I also was responsible for building an internal app for database management. A major part of Nomi is the refined list of restaraunts and nightlife activities. It was critical for our team that all members of the team could add and modify these places in our database, without needing to understand MongoDB or any code.\nThe database manager app offered full CRUD functionality for multiple data resources across three environments using a full MERN stack.",
    skills: ["react", "redux", "javascipt", "node", "express", "mongo_db"],
    images: []
  },
  {
    id: "nomi_mobile_app",
    title: "Nomi Mobile App",
    subtitle: "A mobile app for consumers offering personalized restaurant and entertainment suggestions",
    description: "The Nomi mobile app is a cross platform mobile app with a full dashboard of personalized recommendations. Users register and participate in a 3 question personality surver and then recieve restaurant recommendations tailored for them.",
    skills: ["react_native", "firebase", "javascript"],
    images: []
  },
];

function getProject(projectId: string): Project | null {
  const index = projects.findIndex(project => project.id === projectId);

  if (index === -1) {
    return null;
  };

  return projects[index];
};

export {
  projects,
  getProject
};