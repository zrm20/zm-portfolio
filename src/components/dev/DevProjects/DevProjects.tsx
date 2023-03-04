import React, { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ViewCarousel, ViewList } from "@mui/icons-material";

import useStyles from "./DevProjects.styles";
import { getProject } from "../../../database/Projects";
import { ProjectCard } from "../../projects";

interface DevProjectsProps {

};

export default function DevProjects(props: DevProjectsProps): JSX.Element {
  const styles = useStyles();
  const [isList, setIsList] = useState<boolean>(true);
  const project = getProject("trail_pack_pro")!;

  function handleChangeView(evt: React.MouseEvent<HTMLElement, MouseEvent>, value: boolean): void {
    setIsList(value);
  };


  return (
    <Box sx={styles.root}>
      <ToggleButtonGroup onChange={handleChangeView} value={isList} exclusive >
        <ToggleButton value={true}>
          <ViewList />
        </ToggleButton>
        <ToggleButton value={false}>
          <ViewCarousel />
        </ToggleButton>
      </ToggleButtonGroup>

      <ProjectCard project={project} />
    </Box>
  );
};
