import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, GridProps, Box, Typography, Link } from "@mui/material";

import ResumeSectionTitle from "../ResumeSectionTitle/ResumeSectionTitle";
import useStyles from "./ResumeTechnicalSkills.styles";
import { getSkill } from "../../../database/Skills";
import { SkillItem } from "../../skills";
import { PORTFOLIO_DOMAIN } from "../../../constants/urls";

interface ResumeTechnicalSkillsProps extends GridProps {
  primarySkills: string[];
  secondarySkills: string[];
};

export default function ResumeTechnicalSkills(props: ResumeTechnicalSkillsProps): JSX.Element {
  const styles = useStyles();
  const {...rest} = props;

  const PrimarySkills = props.primarySkills.map(skill => {
    const skillItem = getSkill(skill);

    if(!skillItem) {
      return <></>
    };

    return <SkillItem skill={skillItem} size={65} key={skillItem.id}/>
  });

  const SecondarySkills = props.secondarySkills.map(skill => {
    const skillItem = getSkill(skill);

    if(!skillItem) {
      return <></>
    };

    return <SkillItem skill={skillItem} size={40} key={skillItem.id}/>
  });

  return (
    <Grid item component="section" sx={styles.root} {...rest} >
      <ResumeSectionTitle to="skills" center >
        Technical Skills
      </ResumeSectionTitle>

      <Box sx={styles.skillsContainer}>
        {PrimarySkills}
      </Box>

      <Box sx={styles.skillsContainer}>
        {SecondarySkills}
      </Box>
      
      <Typography sx={styles.footer}>
        See more at <Link component={RouterLink} to="/skills">{PORTFOLIO_DOMAIN}/skills</Link>
      </Typography>
    </Grid>
  );
};
