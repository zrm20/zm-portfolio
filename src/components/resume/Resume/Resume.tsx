import { Paper, Grid } from "@mui/material";
import React from "react";
import ResumeExperience from "../ResumeExperience/ResumeExperience";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import ResumeQRCodes from "../ResumeQRCodes/ResumeQRCodes";
import ResumeTechnicalSkills from "../ResumeTechnicalSkills/ResumeTechnicalSkills";

import useStyles from "./Resume.styles";

interface ResumeProps {
  experiences: string[];
  skills: {
    primary: string[],
    secondary: string[]
  }
};

export default function Resume(props: ResumeProps): JSX.Element {
  const styles = useStyles({ margin: 1 });

  return (
    <Paper sx={styles.root}>
      <Grid sx={styles.innerContainer} container spacing={2} >
        <ResumeHeader xs={12} />
        
        <Grid item xs={12} md={4} sx={{ border: '1px solid blue'}} />
        <ResumeExperience xs={12} md={8} experiences={props.experiences} />

        <ResumeQRCodes xs={12} md={5}/>

        <ResumeTechnicalSkills 
          xs={12} 
          md={7}
          primarySkills={props.skills.primary}
          secondarySkills={props.skills.secondary}
        />
        
      </Grid>
    </Paper>
  );
};
