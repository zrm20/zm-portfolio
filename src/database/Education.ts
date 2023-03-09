import belmontLogo from "../assets/images/educationImages/belmont_logo.jpeg";
import udemyLogo from "../assets/images/educationImages/udemy_logo.png";
import webDevCert from "../assets/images/educationImages/web_developer_bootcamp_cert.jpg";
import cleanCodeCert from "../assets/images/educationImages/clean_code_cert.jpg";
import mernCert from "../assets/images/educationImages/mern_cert.jpg";
import jsUnitTestingCert from "../assets/images/educationImages/js_unit_testing_cert.jpg";
import tsCert from "../assets/images/educationImages/typescript_cert.jpg";
import reactNativeCert from "../assets/images/educationImages/react_native_cert.jpg";

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
      issuerLogo: udemyLogo,
      courseName: "The Web Developer Bootcamp",
      description: "This course covered the basics of full stack web development from the basics of HTML, CSS and JavaScript to server MVC architecture with Express and MongoDB",
      url: webDevCert,
      courseLink: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    }
  },
  {
    type: "certificate",
    id: "nodejs",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseLink: "https://www.udemy.com/course/nodejs-the-complete-guide/",
      courseName: "NodeJS - The Complete Guide (MVC, RET APIs, GraphQL, Deno)",
      description: "The primary goal of this course was to improve on my back end development particularly when it came to REST API development and design.",
    }
  },
  {
    type: "certificate",
    id: "js_unit_testing",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseName: "JavaScript Unit Testing - The Practical Guide",
      courseLink: "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/",
      description: "Unit testing used to be something I struggled with. I could understand the benefits and the purpose but I struggled with what to test, and what not to test. Completing this course not only helped my fix that, but it helped my write better code. Because it turns out, if your code is difficult to unit test, it could probably be split and written in a more granular way to improve testing.",
      url: jsUnitTestingCert
    }
  },
  {
    type: "certificate",
    id: "mern",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseName: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      courseLink: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/",
      description: "When I enrolled in this course, I already had experience with each piece of the MERN stack. However I wanted to improve on those skills and also see the approach of another instructor. My previous React courses were taught by Colt Steel and The Net Ninja, who are excellent. However after my NodeJS course I realized I really enjoy Academind's approach to code. It is very organized and fits my style. This course was an excellent skill refiner.",
      url: mernCert
    }
  },
  {
    type: "certificate",
    id: "clean_code",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseName: "Clean Code",
      courseLink: "https://www.udemy.com/course/writing-clean-code/",
      description: "This was possibly my favorite Udemy course I've taken. I've gained plenty of knowledge from the bootcamp courses and code along courses but often times, these courses teach you how to do something, but not best practices. This course forced my to rethink all of the code I had written previously and ask myself and important question: Is this code readable? Now every time I write a class, function or component I ask myself if someone could read this quickly and easily to understand what is happening.",
      url: cleanCodeCert
    }
  },
  {
    type: "certificate",
    id: "typescript",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseName: "Mastering Typescript",
      courseLink: "https://www.udemy.com/course/learn-typescript/",
      description: "I was slow to adopt Typescript because often times when I would read Typescript code, it was cluttered, messy and generally difficult to read. However, this course proved to me that Typescript has tremendous benefits to any project to prevent bugs and developer errors. And you CAN still write very clean Typescript code, it sometimes just takes a little more attention to detail.",
      url: tsCert
    }
  },
  {
    type: "certificate",
    id: "react_native",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseName: "Complete React Native",
      courseLink: "https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/",
      url: reactNativeCert,
      description: "This course was not my favorite. While I love working with React Native, I just didn't like the instructors approach to file structure, naming and general teaching philosophies. However, the course content was useful and I was still able to refine my React Native skills and pickup some useful tools along the way like Stripe."
    }
  },
  {
    type: "certificate",
    id: "git",
    details: {
      issuer: "Udemy",
      issuerLogo: udemyLogo,
      courseName: "The Git & Github Bootcamp",
      description: "I wish I had taken this course so much earlier in my coding journey. Git is such a universally required tool in software and after learning to use it properly I felt so much more comfortable in my ability to work with a team and maintain a full CI/CD workflow.",
      courseLink: "https://www.udemy.com/course/git-and-github-bootcamp/"
    }
  }
];

const degrees = educations.filter(ed => ed.type === "degree");
const certificates = educations.filter(ed => ed.type === "certificate");

function getEducation(educationId: string | undefined): Education | null {
  if(!educationId) {
    return null
  };

  const index = educations.findIndex(ed => ed.id === educationId);
  
  if(index === -1) {
    return null
  };

  return educations[index];
}

export {
  educations,
  degrees,
  certificates,
  getEducation
};