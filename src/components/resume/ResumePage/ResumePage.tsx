import React, { useRef } from "react";
import { Box, Fab, ThemeProvider, Paper } from "@mui/material";

import { useUpdateTitle } from "../../../hooks";
import useStyles from "./ResumePage.styles";
import { FadeIn } from "../../animations";
import theme from "../../../styles/resumeTheme";
import Resume from "../Resume/Resume";
import { Print } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";

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
  const printRef = useRef<HTMLDivElement | null>(null);
  useUpdateTitle("Zach McCoy Resume");
  const handlePrint = useReactToPrint(
    {
      content: () => printRef.current,
      documentTitle: "Zach McCoy's Resume"
    }
  );

  return (
    <Box sx={styles.root} component={FadeIn}>
      <ThemeProvider theme={theme}>
        <Resume
          experiences={devExperiences}
          skills={devSkills}
          background={devBackground}
        />

        <div style={{display: 'none'}}>
          <Resume
            experiences={devExperiences}
            skills={devSkills}
            background={devBackground}
            forPrint
            ref={printRef}
          />
        </div>
      </ThemeProvider>

      <Fab sx={styles.fab} onClick={handlePrint}>
        <Print />
      </Fab>
    </Box>
  );
};
