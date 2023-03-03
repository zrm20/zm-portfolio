import React from "react";
import { Grid } from "@mui/material"

import useStyles from "./Home.styles";
import AboutCard from "../AboutCard/AboutCard";
import { useUpdateTitle } from "../../../hooks";

interface HomeProps {
};

export default function Home(props: HomeProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("Zach McCoy")

  return (
    <Grid container sx={styles.root}>
      <AboutCard />
    </Grid>
  );
};
