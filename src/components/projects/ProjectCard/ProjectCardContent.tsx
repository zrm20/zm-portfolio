import React, { useState } from "react";
import {
  CardContent,
  Collapse,
  Typography,
  Button
} from "@mui/material";
import { v4 as uuid } from "uuid";

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
            <Typography variant="body2" gutterBottom key={uuid()}>{p}</Typography>
          ))
        }
      </Collapse>
      <Button onClick={handleToggleShowMore}>{showFullDescription ? "Show Less" : "Show More"}</Button>
    </CardContent>
  );
};
