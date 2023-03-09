import React from "react";
import { Box, Paper, Typography, List } from "@mui/material";

import useStyles from "./ExperiencePage.styles";
import { useUpdateTitle } from "../../../hooks";
import { FadeIn } from "../../animations";
import { experiences } from "../../../database/Experiences";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

interface ExperiencePageProps {

};

export default function ExperiencePage(props: ExperiencePageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("ZM - Experience")

  return (
    <Box sx={styles.root} component={FadeIn}>
      <Paper sx={styles.container}>
        <Typography variant="h2">Experience</Typography>

        <List>
          {
            experiences.map(exp => <ExperienceCard experience={exp} key={exp.id} />)
          }
        </List>
      </Paper>
    </Box>
  );
};
