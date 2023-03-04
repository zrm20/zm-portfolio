import React from "react";
import { List } from "@mui/material";

import useStyles from "./ProjectList.styles";
import ProjectListItem from "./ProjectListItem";

interface ProjectListProps {
  projects: Project[];
};

export default function ProjectList(props: ProjectListProps): JSX.Element {
  const styles = useStyles();
  const { projects } = props;

  return (
    <List sx={styles.root} >
      {
        projects.map(project => <ProjectListItem project={project} key={project.id} />)
      }
    </List>
  );
};
