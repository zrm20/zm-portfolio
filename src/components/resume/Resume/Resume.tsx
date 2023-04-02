import { Paper, Grid } from "@mui/material";
import React from "react";
import ResumeExperience from "../ResumeExperience/ResumeExperience";
import ResumeHeader from "../ResumeHeader/ResumeHeader";

import useStyles from "./Resume.styles";

interface ResumeProps {
  experiences: string[];
};

export default function Resume(props: ResumeProps): JSX.Element {
  const styles = useStyles();

  return (
    <Paper sx={styles.root}>
      <Grid sx={styles.innerContainer} container spacing={1} >
        <ResumeHeader xs={12} />
        
        <Grid item xs={4} sx={{ border: '1px solid blue'}} />
        <ResumeExperience xs={8} experiences={props.experiences} />
      </Grid>
    </Paper>
  );
};
