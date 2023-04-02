import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, GridProps, Typography, List, Link } from "@mui/material";

import useStyles from "./ResumeExperience.styles";
import ResumeSectionTitle from "../ResumeSectionTitle/ResumeSectionTitle";
import ResumeExperienceItem from "./ResumeExperienceItem";
import { PORTFOLIO_DOMAIN } from "../../../constants/urls";

interface ResumeExperienceProps extends GridProps {
  experiences: string[];
};

export default function ResumeExperience(props: ResumeExperienceProps): JSX.Element {
  const styles = useStyles();
  const { experiences, ...rest} = props;

  return (
    <Grid item {...rest} component="section" sx={styles.root}>
      <ResumeSectionTitle to="/experience">Experience</ResumeSectionTitle>

      <List>
        {
          experiences.map(exp => <ResumeExperienceItem experienceId={exp} key={exp} />)
        }
      </List>

      <Typography sx={styles.footer}>
        See more at <Link component={RouterLink} to="/experience">{PORTFOLIO_DOMAIN}/experience</Link>
      </Typography>
    </Grid>
  );
};
