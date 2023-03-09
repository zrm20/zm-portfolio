import React from "react";
import { CardContent } from "@mui/material";
import { CollapsingText } from "../../ui";

interface ProjectCardContentProps {
  project: Project;
};

export default function ProjectCardContent(props: ProjectCardContentProps): JSX.Element {
  const { project } = props;

  return (
    <CardContent>
      <CollapsingText collapsedSize={75} textProps={{ variant: "body2" }}>
        {project.description.split('\n')}
      </CollapsingText>
    </CardContent>
  );
};
