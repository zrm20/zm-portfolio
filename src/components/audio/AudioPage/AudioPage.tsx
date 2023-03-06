import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import useStyles from "./AudioPage.styles";
import { FadeIn } from "../../animations";
import { SectionContainer } from "../../ui";
import { useUpdateTitle } from "../../../hooks";
import AudioBio from "../AudioBio/AudioBio";

interface AudioHomeProps {

};

export default function AudioHome(props: AudioHomeProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Audio");

  return (
    <Box sx={styles.root} component={FadeIn} >
      <Paper sx={styles.container} >
        <Typography variant="h2" sx={styles.title}>Audio Engineer</Typography>

        <SectionContainer title="About Zach" id="about_zach">
          <AudioBio />
        </SectionContainer>
        
        <SectionContainer title="Skills & Services" id="skills">

        </SectionContainer>
        
        <SectionContainer title="Experience" id="experience">

        </SectionContainer>

        <SectionContainer title="Shows & Events" id="projects">

        </SectionContainer>
      </Paper>
    </Box> 
  );
};
