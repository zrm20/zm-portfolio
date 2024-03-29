import React from "react";
import { CollapsingText } from "../../ui";

const devBioText =
  `As a software developer, I bring a unique background to the table. With a degree in Audio Engineering Technology and 10 years of experience touring as an audio tech, monitor engineer, and stage manager, I developed an eye for detail and a passion for problem-solving. When the pandemic shut down the touring industry in 2020, I turned to programming to explore a new career path.
I started by learning C# to implement audio in video games, but quickly discovered a love for programming on its own. I taught myself the basics of web development through online resources and completed a full-stack bootcamp course that covered HTML, CSS, JavaScript, Node, Express, and MongoDB. From there, I decided to focus on mobile app development and enrolled in a course on React and React Native.
As an avid backpacker, I created my first solo app, Trail Pack Pro, a React Native app that inventories and manages camping equipment. This experience led to a job at Nomi Travel, where I built two React web-apps and their backend APIs using Node, Express, and MongoDB.
I am a self-motivated learner who is always seeking out new challenges. I have a library of hundreds of hours of online course content and am constantly working on at least one course at a time. With my attention to detail, problem-solving skills, and passion for learning, I am excited to bring my unique background and experience to a software development role.`;

export default function DevBio(): JSX.Element {
  const paragraphs = devBioText.split('\n');

  return (
    <CollapsingText unhiddenText={paragraphs[0]} analyticsId="devBio">
      {paragraphs.slice(1)}
    </CollapsingText>
  );
};
