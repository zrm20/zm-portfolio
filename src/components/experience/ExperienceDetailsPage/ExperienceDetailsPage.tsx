import React from "react";
import { useParams } from "react-router-dom";
import { Box, Link, Paper, Typography } from "@mui/material";
import { Help, List as ListIcon } from "@mui/icons-material";

import { FadeIn } from "../../animations";
import { ButtonLink, SectionContainer } from "../../ui";
import useStyles from "./ExperienceDetailsPage.styles";
import { getExperience } from "../../../database/Experiences";

interface ExperienceDetailsPageProps {

};

export default function ExperienceDetailsPage(props: ExperienceDetailsPageProps): JSX.Element {
  const styles = useStyles();
  const { id } = useParams();
  const experience = getExperience(id);

  if (!experience) {
    return (
      <Box sx={styles.root} component={FadeIn} >
        <Box sx={styles.errorContainer}>
          <Typography variant="h1">Oops!</Typography>
          <Help />
          <Typography>
            Oops! Couldn't find an experience with that id.
            <br />Visit the experiences page to view available experiences.
          </Typography>
          <ButtonLink to="/experience" variant="contained">Experience Page</ButtonLink>
        </Box>
      </Box>
    )
  };

  return (
    <Box sx={styles.root} component={FadeIn} >
      <Paper sx={styles.container}>
        <Typography variant="h2">{experience.company}</Typography>

        <Box sx={styles.imgContainer}>
          <img src={experience.logo} alt={experience.company} />
        </Box>

        {
          Boolean(experience.url) &&
          <Link color="secondary" href={experience.url} target="_blank" gutterBottom >
            Website
          </Link>
        }

        <SectionContainer title="About" id="about" >

        </SectionContainer>

        <SectionContainer title="Skills Used" id="skills" >

        </SectionContainer>

        <SectionContainer title="Projects" id="projects">

        </SectionContainer>

        <ButtonLink 
          to='/experience' 
          variant="contained" 
          sx={styles.backButton}
          endIcon={<ListIcon />}
        >
          All Experiences
        </ButtonLink>
      </Paper>
    </Box>
  );
};
