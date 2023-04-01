import { Paper, Grid } from "@mui/material";
import React from "react";
import ResumeHeader from "../ResumeHeader/ResumeHeader";

import useStyles from "./Resume.styles";

interface ResumeProps {

};

export default function Resume(props: ResumeProps): JSX.Element {
  const styles = useStyles();

  return (
    <Paper sx={styles.root}>
      <Grid sx={styles.innerContainer} container >
        <ResumeHeader xs={12} />
      </Grid>
    </Paper>
  );
};
