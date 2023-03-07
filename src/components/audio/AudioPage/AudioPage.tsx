import React from "react";
import { Box, Paper, Typography, Toolbar } from "@mui/material";

import useStyles from "./AudioPage.styles";
import { FadeIn } from "../../animations";
import { SectionContainer, RouterLink } from "../../ui";
import { useUpdateTitle } from "../../../hooks";
import AudioBio from "../AudioBio/AudioBio";
import AudioSkills from "../AudioSkills/AudioSkills";
import AudioExperience from "../AudioExperience/AudioExperience";
import AudioProjects from "../AudioProjects/AudioProjects";

interface AudioHomeProps {

};

export default function AudioHome(props: AudioHomeProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Audio");

  return (
    <Box sx={styles.root} component={FadeIn} >
      <Paper sx={styles.container} >
        <Typography variant="h2" sx={styles.title}>Audio Engineer</Typography>

        <Toolbar sx={styles.links} component="nav">
          <RouterLink to="#about">About</RouterLink>
          <RouterLink to="#skills">Skills & Services</RouterLink>
          <RouterLink to="#experience">Experience</RouterLink>
          <RouterLink to="#projects">Shows & Events</RouterLink>
        </Toolbar>

        <SectionContainer title="About Zach" id="about_zach">
          <AudioBio />
        </SectionContainer>
        
        <SectionContainer title="Skills & Services" id="skills">
          <AudioSkills />
        </SectionContainer>
        
        <SectionContainer title="Experience" id="experience">
          <AudioExperience />
        </SectionContainer>

        <SectionContainer title="Shows & Events" id="projects">
          <AudioProjects />
        </SectionContainer>
      </Paper>
    </Box> 
  );
};
