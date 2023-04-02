import React, { useRef, useState } from "react";
import { Box, Fab, ThemeProvider, ToggleButtonGroup, ToggleButton } from "@mui/material";

import { useUpdateTitle } from "../../../hooks";
import useStyles from "./ResumePage.styles";
import { FadeIn, SlideIn } from "../../animations";
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

const audioExperiences = [
  "justin_moore",
  "freelance_audio",
  "nomi"
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

const audioSkills = {
  primary: [
    "monitors",
    "stage_management",
    "foh",
    "rf"
  ],
  secondary: [
    "ableton",
    "recording",
    "pro_tools",
    "logic",
    "studio_mixing",
    "live_capture"
  ]
};

const devBackground = "I bring a unique background to software development with a degree in Audio Engineering Technology and 10 years of experience in touring as an audio tech, monitor engineer, and stage manager. I am a self-taught developer with a passion for problem-solving, web and mobile development. With my attention to detail and experience building web and mobile apps, I am eager to contribute to a software development team."
const audioBackground = "Experienced audio engineer with 10+ years in touring and freelance work. Highlights include serving as monitor engineer and stage manager for country artist Justin Moore, refining skills in troubleshooting high-pressure situations, and overseeing teams of up to 30 people while coordinating with local labor unions. A driven learner and team player with a passion for music and technology."

export default function ResumePage(props: ResumePageProps): JSX.Element {
  const [isDev, setIsDev] = useState<boolean>(true);
  const styles = useStyles();
  const printRef = useRef<HTMLDivElement | null>(null);
  useUpdateTitle("Zach McCoy Resume");
  const handlePrint = useReactToPrint(
    {
      content: () => printRef.current,
      documentTitle: "Zach_McCoy_Resume"
    }
  );

  function handleModeChange(evt: React.MouseEvent<HTMLElement, MouseEvent>, value: any) {
    setIsDev(Boolean(value));
  };

  return (
    <Box sx={styles.root} component={FadeIn}>
      <ToggleButtonGroup
        value={isDev}
        onChange={handleModeChange}
        exclusive
        sx={styles.toggleButtons}
      >
        <ToggleButton value={true}>Dev</ToggleButton>
        <ToggleButton value={false}>Audio</ToggleButton>
      </ToggleButtonGroup>

      <ThemeProvider theme={theme}>
        <SlideIn direction="up">
          <Resume
            experiences={isDev ? devExperiences : audioExperiences}
            skills={isDev ? devSkills : audioSkills}
            background={isDev ? devBackground: audioBackground}
          />
        </SlideIn>

        <div style={{ display: 'none' }}>
          <Resume
            experiences={isDev ? devExperiences : audioExperiences}
            skills={isDev ? devSkills : audioSkills}
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
