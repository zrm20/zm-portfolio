import React from "react";
import { Paper, Typography } from "@mui/material";

import useStyles from "./AboutCard.styles";
import headshot from "../../../assets/images/headshot.jpeg";
import { CollapsingText } from "../../ui";

interface AboutCardProps {

};

const aboutText = `
As a seasoned professional with a unique background in both audio engineering and software development, I bring a diverse skill set and problem-solving expertise to every project.
With a degree in Audio Engineering Technology and over a decade of experience as a touring audio engineer and freelance audio engineer, I have a sharp eye for detail and excel at troubleshooting complex problems in high-pressure situations.
When the pandemic brought the touring industry to a halt in 2020, I pivoted to programming, quickly discovering a passion for software development. I began by learning C# to implement audio in video games, then taught myself web development through online resources and completed a full-stack bootcamp covering HTML, CSS, JavaScript, Node, Express, and MongoDB.
My passion for mobile app development led me to create Trail Pack Pro, a React Native app that inventories and manages camping equipment, and secure a job at Nomi Travel building two React web-apps and their backend APIs using Node, Express, and MongoDB.
As a self-motivated learner, I'm constantly expanding my skills and knowledge through online courses and seek out new challenges. With my attention to detail, problem-solving skills, and passion for learning, I'm excited to bring my unique background and experience to any project or role.
`

export default function AboutCard(props: AboutCardProps): JSX.Element {
  const styles = useStyles();

  return (
    <Paper sx={styles.root} >
      <img
        src={headshot}
        alt='Zach McCoy Headshot'
        style={styles.image}
      />

      <Typography variant='h1' sx={styles.title}>
        About Zach
      </Typography>

      <CollapsingText 
        collapsedSize={100} 
        textProps={{ gutterBottom: true }}
        analyticsId="aboutCard"
      >
        {aboutText.split('\n')}
      </CollapsingText>
    </Paper>
  );
};
