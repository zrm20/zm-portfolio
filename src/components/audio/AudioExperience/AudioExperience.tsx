import React from "react";
import { Box } from "@mui/material";

import useStyles from "./AudioExperience.styles";
import { ExperienceCard } from "../../experience";
import { getExperiences } from "../../../database/Experiences";

interface AudioExperienceProps {

};

export default function AudioExperience(props: AudioExperienceProps): JSX.Element {
  const styles = useStyles();
  const experiences = getExperiences(exp => exp.category === "Audio");

  return (
    <Box sx={styles.root}>
      {
        experiences.map(exp => <ExperienceCard experience={exp} key={exp.id} />)
      }
    </Box>
  );
};
