import React, { useState } from "react";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Collapse,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

import useStyles from "./ProjectList.styles";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

interface ProjectListItemProps {
  project: Project;
};

export default function ProjectListItem(props: ProjectListItemProps): JSX.Element {
  const styles = useStyles();
  const [showMore, setShowMore] = useState<boolean>(false);
  const { project } = props;

  function toggleShowMore(): void {
    setShowMore(!showMore);
  };

  return (
    <>
      <ListItemButton component="li" sx={styles.li} onClick={toggleShowMore}>
        <ListItemAvatar>
          <Avatar src={project.logo}>{project.title[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={project.title} secondary={project.subtitle} />
        {showMore ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={showMore} unmountOnExit collapsedSize={0}>
        <Box sx={styles.collapse}>
          <ProjectLinks project={project} />
          <Button color="secondary">Details</Button>
        </Box>
      </Collapse>
      <Divider />
    </>
  );
};
