import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import ResumeAboutMe from "../ResumeAboutMe/ResumeAboutMe";
import ResumeBackgroundSection from "../ResumeBackgroundSection/ResumeBackgroundSection";
import ResumeExperience from "../ResumeExperience/ResumeExperience";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import ResumeTechnicalSkills from "../ResumeTechnicalSkills/ResumeTechnicalSkills";

import useStyles from "./Resume.styles";

interface ResumeProps {
  experiences: string[];
  skills: {
    primary: string[],
    secondary: string[]
  }
  background: string
};

export default function Resume(props: ResumeProps): JSX.Element {
  const styles = useStyles({ margin: 1 });

  return (
    <Paper sx={styles.root}>
      <Grid sx={styles.innerContainer} container spacing={0} >
        <ResumeHeader xs={12} />
        
        <ResumeAboutMe xs={12} sm={3} />

        <ResumeExperience xs={12} sm={9} experiences={props.experiences} />

        <ResumeBackgroundSection 
          xs={12} 
          md={5} 
          background={props.background}
        />

        <ResumeTechnicalSkills 
          xs={12} 
          md={7}
          primarySkills={props.skills.primary}
          secondarySkills={props.skills.secondary}
        />

        <Typography sx={styles.footer}>Resume built with React <i className="devicon-react-original"/></Typography>
      </Grid>
    </Paper>
  );
};
