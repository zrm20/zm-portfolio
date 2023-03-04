import React from "react";
import { Stack, IconButton } from "@mui/material";
import { Language, Apple } from "@mui/icons-material";

import useStyles from "./ProjectLinks.styles";

interface ProjectLinksProps {
  project: Project;
};

export default function ProjectLinks(props: ProjectLinksProps): JSX.Element {
  const styles = useStyles();
  const { project } = props;

  return (
    <Stack sx={styles.root}>
      {
        Boolean(project.website) &&
        <IconButton href={project.website!}>
          <Language />
        </IconButton>
      }
      {
        Boolean(project.repo) &&
        <IconButton href={project.repo!}>
          <i className="devicon-github-original"></i>
        </IconButton>
      }
      {
        Boolean(project.appStore || project.testFlight) &&
        <IconButton href={(project.appStore || project.testFlight)!}>
          <Apple />
        </IconButton>
      }
      {
        Boolean(project.playStore) &&
        <IconButton href={project.playStore!}>
          <i className="devicon-android-plain-wordmark"></i>
        </IconButton>
      }
    </Stack>
  );
};
