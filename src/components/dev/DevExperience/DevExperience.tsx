import React from "react";
import { Box } from "@mui/material";

import useStyles from "./DevExperience.styles";
import { ExperienceCard } from "../../experience";
import { getExperiences } from "../../../database/Experiences";

interface DevExperienceProps {

};

export default function DevExperience(props: DevExperienceProps): JSX.Element {
  const styles = useStyles();
  const experiences = getExperiences(exp => exp.category === "Dev");

  return (
    <Box sx={styles.root}>
      {
        experiences.map(exp => <ExperienceCard experience={exp} key={exp.id} />)
      }
    </Box>
  );
};
