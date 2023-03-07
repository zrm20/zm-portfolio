import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Info } from "@mui/icons-material";

import useStyles from "./ProjectCard.styles";
import ProjectCardContent from "./ProjectCardContent";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

interface ProjectCardProps {
  project: Project;
};

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
  const styles = useStyles();
  const { project } = props;

  return (
    <Card sx={styles.root}>
      <CardHeader
        title={project.title}
        subheader={project.subtitle}
        avatar={<Avatar src={project.logo}>{project.title[0]}</Avatar>}
        action={ // TODO Add open modal action
          <IconButton>
            <Info />
          </IconButton>
        }
      />
      {
        Boolean(project.images.length) &&
        <CardMedia
          component="img"
          height={150}
          image={project.images[0]}
          alt={project.title}
          sx={styles.imgContainer}
        />
      }
      <ProjectCardContent project={project} />

      <CardActions>
        <ProjectLinks project={project} />
      </CardActions>
    </Card>
  );
};
