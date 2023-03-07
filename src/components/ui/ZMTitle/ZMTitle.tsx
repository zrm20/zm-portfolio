import React from "react";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import useStyles from "./ZMTitle.styles";

export default function ZMTitle(props: { onClick?: () => void}): JSX.Element {
  const styles = useStyles();

  return (
    <Typography
      variant='h3'
      component={RouterLink}
      to='/'
      sx={styles.root}
      onClick={props.onClick}
    >
      <sup>Zach</sup>
      <sub>McCoy</sub>
    </Typography>
  );
};
