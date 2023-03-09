import React from "react";
import { Box, List, Paper, Typography } from "@mui/material";
import { Help, List as ListIcon } from "@mui/icons-material";
import { useParams } from "react-router-dom";

import { getSkill } from "../../../database/Skills";
import { ButtonLink, SectionContainer } from "../../ui";
import { FadeIn } from "../../animations";
import useStyles from "./SkillDetailsPage.styles";
import { getProjects } from "../../../database/Projects";
import { getEducation } from "../../../database/Education";
import { EducationListItem } from "../../education";
import { ProjectList } from "../../projects";
import { useUpdateTitle } from "../../../hooks";

export default function SkillDetailsPage(): JSX.Element {
  const styles = useStyles();
  const { id } = useParams();
  const skill = getSkill(id);
  useUpdateTitle(skill?.name || "Oops!")
  
  if (!skill) {
    return (
      <Box sx={styles.root} component={FadeIn}>
        <Box sx={styles.errorContainer}>
          <Typography variant="h1">Oops!</Typography>
          <Help />
          <Typography>
            Oops! Couldn't find a skill with that id.
            <br />Visit the skills page to view available skills.
          </Typography>
          <ButtonLink to="/skills" variant="contained">Skills Page</ButtonLink>
        </Box>
      </Box>
    )
  }
  
  const projects = getProjects(proj => proj.skills.includes(skill.id))

  return (
    <Box sx={styles.root} component={FadeIn}>
      <Paper sx={styles.container}>
        <ButtonLink to="/skills" variant="contained" sx={styles.backButton} endIcon={<ListIcon />}>All Skills</ButtonLink>

        <Typography variant="h2">{skill.name}</Typography>

        <Box sx={styles.icon}>
          <i className={skill.icon}></i>
        </Box>

        {
          skill.relatedEducation.length > 0 &&
          <SectionContainer title="Related Education" id="education" containerSx={styles.listContainer}>
            <List sx={styles.edList}>
              {
                skill.relatedEducation.map(educationId => {
                  const education = getEducation(educationId);

                  if(!education) {
                    return <></>
                  }

                  return <EducationListItem education={education} key={education.id} />
                })
              }
            </List>
          </SectionContainer>
        }
        {
          projects.length > 0 &&
          <SectionContainer title="Projects" id="projects" containerSx={styles.listContainer}>
            <ProjectList projects={projects} />
          </SectionContainer>
        }
      </Paper>
    </Box>
  );
};
