import React from "react";
import { Grid, GridProps, Typography } from "@mui/material";

import ResumeSectionTitle from "../ResumeSectionTitle/ResumeSectionTitle";
import useStyles from "./ResumeBackgroundSection.styles";

interface ResumeBackgroundSectionProps extends GridProps {
  background: string
};

export default function ResumeBackgroundSection(props: ResumeBackgroundSectionProps): JSX.Element {
  const styles = useStyles();
  const { background, ...rest } = props;

  return (
    <Grid item sx={styles.root} component="section" {...rest}>
      <ResumeSectionTitle to={undefined}>Background</ResumeSectionTitle>
      <Typography>
        {background}
      </Typography>
    </Grid>
  );
};
