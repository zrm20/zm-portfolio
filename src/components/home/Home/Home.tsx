import React from "react";
import { Grid } from "@mui/material"

import useStyles from "./Home.styles";
import AboutCard from "../AboutCard/AboutCard";

interface HomeProps {
};

export default function Home(props: HomeProps): JSX.Element {
  const styles = useStyles();

  return (
    <Grid container sx={styles.root}>
      <AboutCard />
    </Grid>
  );
};
