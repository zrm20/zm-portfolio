import belmontLogo from "../assets/images/educationImages/belmont_logo.jpeg";

const educations: Education[] = [
  {
    type: "degree",
    id: "belmont",
    details: {
      school: {
        name: "Belmont University",
        type: "University",
        city: "Nashville",
        state: "Tennessee",
        logo: belmontLogo
      },
      logo: "", // TODO
      degree: "Bachelor of Science",
      major: "Audio Engineering Technology",
      minor: "Business Admin",
      startDate: new Date("August 1, 2011"),
      endDate: new Date("December 15, 2014")
    }
  },
  {
    type: "certificate",
    id: "web_development_bootcamp",
    details: {
      issuer: "Udemy",
      courseName: "The Complete Web Development Bootcamp",
      description: "This course covered the basics of full stack web development from the basics of HTML, CSS and JavaScript to server MVC architecture with Express and MongoDB",
    }
  }
];

const degrees = educations.filter(ed => ed.type === "degree");
const certificates = educations.filter(ed => ed.type === "certificate");

export {
  educations,
  degrees,
  certificates
};