import React from "react";
import { Box, Link, Paper, Toolbar, Typography } from "@mui/material";

import useStyles from "./DevPage.styles";
import { useUpdateTitle } from "../../../hooks";
import { SectionContainer } from "../../ui";
import DevBio from "../DevBio/DevBio";
import TechStack from "../TechStack/TechStack";
import { FadeIn } from "../../animations";
import DevProjects from "../DevProjects/DevProjects";
import DevExperience from "../DevExperience/DevExperience";

interface DevPageProps {

};

export default function DevPage(props: DevPageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Software");

  return (
    <Box sx={styles.root} component={FadeIn} >
      <Paper sx={styles.container} >
        <Typography variant="h2" sx={styles.title}>Software Developer</Typography>

        <Toolbar sx={styles.links}>
          <Link>About</Link>
          <Link>Tech Stack</Link>
          <Link>Projects</Link>
          <Link>Experience</Link>
        </Toolbar>

        <SectionContainer title="About Zach" id="about">
          <DevBio />
        </SectionContainer>

        <SectionContainer title="Tech Stack" id="tech_stack" >
          <TechStack />
        </SectionContainer>

        <SectionContainer title="Projects" id="projects">
          <DevProjects />
        </SectionContainer>

        <SectionContainer title="Experience" id="experience">
          <DevExperience />
        </SectionContainer>
      </Paper>
    </Box>
  );
};
