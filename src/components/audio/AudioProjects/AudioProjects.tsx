import React from "react";
import { Box } from "@mui/material";

import useStyles from "./AudioProjects.styles";
import { audioProjects } from "../../../database/Projects";
import { ProjectCard } from "../../projects";

interface AudioProjectsProps {

};

export default function AudioProjects(props: AudioProjectsProps): JSX.Element {
  const styles = useStyles();

  return (
    <Box sx={styles.root}>
      {
        audioProjects.map(proj => <ProjectCard project={proj} key={proj.id} />)
      }
    </Box>
  );
};
