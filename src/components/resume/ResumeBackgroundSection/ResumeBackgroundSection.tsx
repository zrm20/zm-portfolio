import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, GridProps, Typography, Link } from "@mui/material";

import { PORTFOLIO_DOMAIN } from "../../../constants/urls";
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
      <Typography sx={styles.footer}>
        See more at <Link component={RouterLink} to="/dev">{PORTFOLIO_DOMAIN}/dev</Link>
      </Typography>
    </Grid>
  );
};
