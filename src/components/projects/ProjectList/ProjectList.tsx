import React, { useState } from "react";
import { Button, List, Stack, Typography } from "@mui/material";

import useStyles from "./ProjectList.styles";
import ProjectListItem from "./ProjectListItem";

interface ProjectListProps {
  projects: Project[];
  length?: number;
};

export default function ProjectList(props: ProjectListProps): JSX.Element {
  const styles = useStyles();
  const [pageNum, setPageNum] = useState<number>(1);

  const { projects, length = 3 } = props;

  const numResults = pageNum * length;

  function showMore(): void {
    setPageNum(pageNum + 1);
  };

  function showLess(): void {
    setPageNum(pageNum - 1);
  };

  return (
    <List sx={styles.root} >
      {
        projects
          .slice(0, numResults)
          .map(project => <ProjectListItem project={project} key={project.id} />)
      }
      <Stack sx={styles.listControl}>
        <Button disabled={pageNum <= 1} onClick={showLess} color='secondary'>
          Show Less
        </Button>
        <Typography variant="caption">
          {numResults <= projects.length ? numResults : projects.length} of {projects.length}
        </Typography>
        <Button disabled={numResults >= projects.length} onClick={showMore} color='secondary'>
          Show More
        </Button>
      </Stack>
    </List>
  );
};
