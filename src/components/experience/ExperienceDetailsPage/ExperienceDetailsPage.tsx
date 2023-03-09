import React from "react";
import { useParams } from "react-router-dom";
import { Box, Link, Paper, Typography } from "@mui/material";
import { Help, List as ListIcon } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

import { FadeIn } from "../../animations";
import { ButtonLink, CollapsingText, SectionContainer } from "../../ui";
import useStyles from "./ExperienceDetailsPage.styles";
import { getExperience } from "../../../database/Experiences";
import { SkillItem } from "../../skills";
import { getSkill } from "../../../database/Skills";
import { getProjects } from "../../../database/Projects";
import { ProjectList } from "../../projects";

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
          <CollapsingText sx={styles.aboutText} collapsedSize={100}>
            {experience.description}
          </CollapsingText>
        </SectionContainer>

        <SectionContainer title="Skills Used" id="skills" containerSx={styles.skillsSection}>
          {
            experience.skills.map(skillId => {
              const skill = getSkill(skillId);
              
              if(!skill) {
                return <React.Fragment key={uuid()}></React.Fragment>
              };

              return <SkillItem skill={skill} key={skill.id} size={75}/>
            })
          }
        </SectionContainer>

        <SectionContainer title="Projects" id="projects" containerSx={styles.projectsSection}>
          <ProjectList projects={getProjects(proj => proj.experienceId === experience.id)}/>
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
