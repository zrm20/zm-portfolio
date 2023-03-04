import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import useStyles from "./DevPage.styles";
import { useUpdateTitle } from "../../../hooks";
import { SectionContainer } from "../../ui";
import DevBio from "../DevBio/DevBio";
import TechStack from "../TechStack/TechStack";
import { FadeIn } from "../../animations";

interface DevPageProps {

};

export default function DevPage(props: DevPageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Software");

  return (
    <Box sx={styles.root} component={FadeIn} >
      <Paper sx={styles.container} >
        <Typography variant="h2" sx={styles.title}>Software Developer</Typography>

        <SectionContainer title="About Zach" id="about">
          <DevBio />
        </SectionContainer>

        <SectionContainer title="Tech Stack" id="tech_stack" >
          <TechStack />
        </SectionContainer>

        <SectionContainer title="Projects" id="projects">

        </SectionContainer>
      </Paper>
    </Box>
  );
};
