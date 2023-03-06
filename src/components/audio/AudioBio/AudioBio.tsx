import React, { useState } from "react";
import { Button, Collapse, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

interface AudioBioProps {

};

const yearsOfExperience: number = (new Date(Date.now()).getFullYear()) - 2013;

const audioBio =
  `Growing up I had a love for music and a mind for tech. When the time came to choose a career path, Audio Engineering felt like the perfect fit, combining music and tech.
In 2011 I moved to Nashville, TN and enrolled in Belmont University's Audio Engineering program. As a student I was eager to learn and accepted any oppertunity that presented itself.
During my sophomore year I decided that the live sound career was the best fit for me. As a junior I was able to serve in leadership roles in 4 out of 5 showcase concerts, a full arena production put on entirely by students. I was able to gain experience as a front of house engineer and production manager.
In 2013 after my sophmore year at Belmont I began searching for an internship. 
After interviewing for multiple positions I was offered a touring internship with country artist Justin Moore. For that summer I traveled the country on a tour bus for the first time, serving as a monitor tech. I learned the ins-and-outs of touring and really refined my ability to troubleshoot problems in high pressure situations.
In December of 2014 I graduated from Belmont and accepted a role as the monitor engineer for Justin Moore. In my first 12 months as monitor engineer, we toured with both Miranda Lambert and Brad Paisley in direct support roles.
In 2018 I recieved a promotion to the stage manager position. While maintaining my role as monitor engineer, I was now responsible for overseeing a crew of 5-12 people, and coordinating with local labor unions of up to 30 people. As the stage manager I strive to make sure that every department is working at their full potential and the day moves along as smoothly as possible.
As of today I have more than ${yearsOfExperience} years of experience as a touring audio engineer and freelance audio engineer.`;

export default function AudioBio(props: AudioBioProps): JSX.Element {
  const [showMore, setShowMore] = useState<boolean>(false);

  const paragraphs = audioBio.split('\n');

  function toggleShowMore(): void {
    setShowMore(!showMore);
  };

  return (
    <>
      <Typography gutterBottom>{paragraphs[0]}</Typography>
      {
        !showMore &&
        <Typography component="span">...</Typography>
      }
      <Collapse in={showMore}>
        {
          paragraphs.slice(1)
            .map(p => <Typography gutterBottom key={uuid()}>{p}</Typography>)
        }
      </Collapse>
      <Button onClick={toggleShowMore}>{showMore ? "Show Less" : "Show More"}</Button>
    </>
  );
};
