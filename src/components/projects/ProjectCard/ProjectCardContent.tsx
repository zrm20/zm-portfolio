import React, { useState } from "react";
import {
  CardContent,
  Collapse,
  Typography,
  Button
} from "@mui/material";


interface ProjectCardContentProps {
  project: Project;
};

export default function ProjectCardContent(props: ProjectCardContentProps): JSX.Element {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const { project } = props;

  function handleToggleShowMore(): void {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <CardContent>
      <Collapse collapsedSize={75} in={showFullDescription}>
        {
          project.description.split('\n').map(p => (
            <Typography variant="body2" gutterBottom>{p}</Typography>
          ))
        }
      </Collapse>
      <Button onClick={handleToggleShowMore}>{showFullDescription ? "Show Less" : "Show More"}</Button>
    </CardContent>
  );
};
