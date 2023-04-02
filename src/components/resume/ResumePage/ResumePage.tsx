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

const devSkills = {
  primary: [
    "javascript",
    "typescript",
    "react",
    "node"
  ],
  secondary: [
    "redux",
    "jest",
    "express",
    "mongo_db",
    "firebase_firestore",
    "material_ui",
  ]
};

const devBackground = "I bring a unique background to software development with a degree in Audio Engineering Technology and 10 years of experience in touring as an audio tech, monitor engineer, and stage manager. I am a self-taught developer with a passion for problem-solving, web and mobile development. With my attention to detail and experience building web and mobile apps, I am eager to contribute to a software development team."

export default function ResumePage(props: ResumePageProps): JSX.Element {
  const styles = useStyles();
  useUpdateTitle("Zach McCoy Resume");

  return (
    <Box sx={styles.root} component={FadeIn}>
      <ThemeProvider theme={theme}>
        <Resume 
          experiences={devExperiences}
          skills={devSkills}
          background={devBackground}
        />
      </ThemeProvider>
    </Box>
  );
};
