import React from "react";
import { Box, Divider, Typography } from "@mui/material";

import useStyles from "./SectionContainer.styles";

interface SectionContainerProps {
  title: string;
  id: string;
  children: JSX.Element | JSX.Element[]
};

export default function SectionContainer(props: SectionContainerProps): JSX.Element {
  const styles = useStyles();

  return (
    <Box sx={styles.root} component="section" id={props.id}>
      <Typography sx={styles.title} variant="h4">{props.title}</Typography>
      <Divider />
      <Box sx={styles.container}>
        {props.children}
      </Box>
    </Box>
  );
};
