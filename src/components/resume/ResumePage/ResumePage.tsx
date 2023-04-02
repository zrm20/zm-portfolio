import React from "react";
import { Box, ThemeProvider } from "@mui/material";

import { useUpdateTitle } from "../../../hooks";
import useStyles from "./ResumePage.styles";
import { FadeIn } from "../../animations";
import theme from "../../../styles/resumeTheme";
import Resume from "../Resume/Resume";

interface ResumePageProps {

};

const devExperiences = [
  "nomi",
  "justin_moore",
  "freelance_audio"
];

export default function ResumePage(props: ResumePageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("Zach McCoy Resume");

  return (
    <Box sx={styles.root} component={FadeIn}>
      <ThemeProvider theme={theme}>
        <Resume 
          experiences={devExperiences}
        />
      </ThemeProvider>
    </Box>
  );
};
