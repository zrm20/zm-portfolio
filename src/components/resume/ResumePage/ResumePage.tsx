import React from "react";
import { Box, ThemeProvider } from "@mui/material";

import { useUpdateTitle } from "../../../hooks";
import useStyles from "./ResumePage.styles";
import { FadeIn } from "../../animations";
import theme from "../../../styles/resumeTheme";

interface ResumePageProps {

};

export default function ResumePage(props: ResumePageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("Zach McCoy Resume");

  return (
    <Box sx={styles.root} component={FadeIn}>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </Box>
  );
};
