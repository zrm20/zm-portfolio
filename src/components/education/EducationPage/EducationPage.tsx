import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import useStyles from "./EducationPage.styles";
import EducationCard from "../EducationCard/EducationCard";
import { SectionContainer } from "../../ui";
import { certificates, degrees } from "../../../database/Education";
import { FadeIn } from "../../animations";
import { useUpdateTitle } from "../../../hooks";

interface EducationPageProps {

};

export default function EducationPage(props: EducationPageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Education");

  return (
    <Box sx={styles.root} component={FadeIn}>
      <Paper sx={styles.container}>
        <Typography variant="h2" gutterBottom >Education</Typography>
        <SectionContainer title="Degree" id="degree" sx={styles.section}>
          <Box sx={styles.scrollContainer}>
            {
              degrees.map(degree => <EducationCard education={degree} key={degree.id} />)
            }
          </Box>
        </SectionContainer>

        <SectionContainer title="Certificates" id="certificates" sx={styles.section}>
          <Box sx={styles.scrollContainer}>
            {
              certificates.map(cert => <EducationCard education={cert} key={cert.id} />)
            }
          </Box>
        </SectionContainer>
      </Paper>
    </Box>
  );
};
