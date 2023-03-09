import React from "react";
import { Box, Paper, Typography, List, Divider } from "@mui/material";
import { v4 as uuid } from "uuid";

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
            experiences.map(exp => (
              <React.Fragment key={uuid()}>
                <ExperienceCard experience={exp} />
                <Divider />
              </React.Fragment>
            ))
          }
        </List>
      </Paper>
    </Box>
  );
};
