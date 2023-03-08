import React, { CSSProperties } from "react";
import { Box, Divider, SxProps, Typography } from "@mui/material";

import useStyles from "./SectionContainer.styles";

interface SectionContainerProps {
  title: string;
  id: string;
  children: JSX.Element | JSX.Element[],
  style?: CSSProperties
  sx?: SxProps
  titleSx?: SxProps
  containerSx?: SxProps
};

export default function SectionContainer(props: SectionContainerProps): JSX.Element {
  const styles = useStyles();

  return (
    <Box sx={props.sx || styles.root} component="section" id={props.id} style={props.style}>
      <Typography sx={props.titleSx || styles.title} variant="h4">{props.title}</Typography>
      <Divider />
      <Box sx={props.containerSx || styles.container}>
        {props.children}
      </Box>
    </Box>
  );
};
