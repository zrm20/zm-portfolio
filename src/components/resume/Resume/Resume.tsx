import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import ResumeAboutMe from "../ResumeAboutMe/ResumeAboutMe";
import ResumeBackgroundSection from "../ResumeBackgroundSection/ResumeBackgroundSection";
import ResumeExperience from "../ResumeExperience/ResumeExperience";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import ResumeTechnicalSkills from "../ResumeTechnicalSkills/ResumeTechnicalSkills";

import useStyles from "./Resume.styles";

interface ResumeProps {
  experiences: string[];
  skills: {
    primary: string[],
    secondary: string[]
  }
  background: string;
  forPrint?: boolean;
};
const Resume = React.forwardRef((props: ResumeProps, ref: React.ForwardedRef<HTMLDivElement | null>): JSX.Element => {
  const styles = useStyles({ margin: .75, forPrint: props.forPrint || false });

  return (
    <Paper sx={styles.root}>
      <Grid sx={styles.innerContainer} container ref={ref}>
        <ResumeHeader xs={12} forPrint={props.forPrint} />
        
        <ResumeAboutMe xs={!props.forPrint ? 12 : 3} sm={3} />

        <ResumeExperience xs={!props.forPrint ? 12 : 9} sm={9} experiences={props.experiences} />

        <ResumeBackgroundSection 
          xs={!props.forPrint ? 12: 5} 
          md={5} 
          background={props.background}
        />

        <ResumeTechnicalSkills 
          xs={!props.forPrint ? 12 : 7} 
          md={7}
          primarySkills={props.skills.primary}
          secondarySkills={props.skills.secondary}
        />

        <Typography sx={styles.footer}>Resume built with React <i className="devicon-react-original"/></Typography>
      </Grid>
    </Paper>
  );
});

export default Resume;