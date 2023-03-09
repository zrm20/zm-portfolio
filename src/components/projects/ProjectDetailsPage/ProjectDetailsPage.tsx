import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { getProject } from "../../../database/Projects";
import useStyles from "./ProjectDetailsPage.styles";
import {  Help, List } from "@mui/icons-material";
import { ButtonLink, CollapsingText, SectionContainer } from "../../ui";
import { SkillItem } from "../../skills";
import { FadeIn } from "../../animations";
import { getSkill } from "../../../database/Skills";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import projectHasLinks from "../../../utils/projectHasLinks";
import { ExperienceCard } from "../../experience";
import { getExperience } from "../../../database/Experiences";

export default function ProjectDetailsPage(): JSX.Element {
  const styles = useStyles();
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return (
      <Box sx={styles.root} component={FadeIn} >
        <Box sx={styles.errorContainer}>
          <Typography variant="h1">Oops!</Typography>
          <Help />
          <Typography>
            Oops! Couldn't find a project with that id.
            <br />Visit the projects page to view available projects.
          </Typography>
          <ButtonLink to="/projects" variant="contained">Projects Page</ButtonLink>
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={styles.root} component={FadeIn} >
      <ButtonLink to="/projects" variant="contained" sx={styles.backButton} endIcon={<List />}>All Projects</ButtonLink>
      <Paper sx={styles.container}>
        <Typography variant="h2">{project.title}</Typography>
        <Typography variant="subtitle1">{project.subtitle}</Typography>

        {
          project.images.length > 0 &&
          <Box sx={styles.imgContainer}>
            <img src={project.images[0]} alt={project.title} />
          </Box>
        }

        {
          projectHasLinks(project) &&
          <SectionContainer title="Links" id="links">
            <ProjectLinks project={project}/>
          </SectionContainer>
        }

        <SectionContainer title="Description" id="description">
          <CollapsingText collapsedSize={100} textProps={{ sx: styles.description }}>
            {project.description.split('\n')}
          </CollapsingText>
        </SectionContainer>

        <SectionContainer title="Skills Utilized" id="skills" containerSx={styles.skillsSection}>
          {
            project.skills.map(skillId => {
              const skill = getSkill(skillId);

              if(!skill)  {
                return <></>
              };

              return <SkillItem skill={skill} key={uuid()} size={75} />
            })
          }
        </SectionContainer>

        {
          Boolean(project.experienceId) && Boolean(getExperience(project.experienceId!)) &&
          <SectionContainer title="Related Experience" id="experience" containerSx={styles.experienceSection}>
            <ExperienceCard experience={getExperience(project.experienceId!)!} />
          </SectionContainer>
        }
      </Paper>
    </Box>
  );
};
