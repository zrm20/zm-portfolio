import React from "react";
import { Card, CardContent } from "@mui/material";

import useStyles from "./ProjectCard.styles";

interface ProjectCardProps {
  project: Project;
};

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
  const styles = useStyles();

  return (
    <Card sx={styles.root}>
      <CardContent>

      </CardContent>
    </Card>
  );
};
