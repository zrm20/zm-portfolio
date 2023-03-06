import React from "react";
import { Box, Grid } from "@mui/material"

import useStyles from "./Home.styles";
import AboutCard from "../AboutCard/AboutCard";
import { useUpdateTitle } from "../../../hooks";
import { FadeIn } from "../../animations";
import { EducationCard } from "../../education/EducationCard";
import { degrees, certificates } from "../../../database/Education";
import { SectionContainer } from "../../ui";

interface HomeProps {
};

export default function Home(props: HomeProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("Zach McCoy");

  return (
    <Grid container sx={styles.root} component={FadeIn}>
      <AboutCard />

      <SectionContainer title="Degree" id="degree" sx={styles.section} titleSx={styles.sectionTitle}>
        <Box sx={styles.scrollContainer}>
          {
            degrees.map(degree => <EducationCard education={degree} key={degree.id} />)
          }
        </Box>
      </SectionContainer>

      <SectionContainer title="Certificates" id="certificates" sx={styles.section} titleSx={styles.sectionTitle}>
        <Box sx={styles.scrollContainer}>
          {
            certificates.map(cert => <EducationCard education={cert} key={cert.id} />)
          }
        </Box>
      </SectionContainer>
    </Grid>
  );
};
