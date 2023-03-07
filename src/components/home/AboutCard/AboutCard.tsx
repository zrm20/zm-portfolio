import React from "react";
import { Paper, Typography } from "@mui/material";

import useStyles from "./AboutCard.styles";
import headshot from "../../../assets/images/headshot.jpeg";

interface AboutCardProps {

};

export default function AboutCard(props: AboutCardProps): JSX.Element {
  const styles = useStyles();

  return (
    <Paper sx={styles.root} >
      <img
        src={headshot}
        alt='Zach McCoy Headshot'
        style={styles.image}
      />

      <Typography variant='subtitle1' sx={styles.text}>
        “A self-driven, lifelong learner with a well-rounded tool-kit of technical and personal skills. Always striving for growth and self-improvement.”
      </Typography>
    </Paper>
  );
};
