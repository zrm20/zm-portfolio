import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, GridProps, Typography, Box, List, ListItem, Link} from "@mui/material";

import ResumeSectionTitle from "../ResumeSectionTitle/ResumeSectionTitle";
import useStyles from "./ResumeAboutMe.styles";
import { getEducation } from "../../../database/Education";
import ResumeAboutCardItem from "../ResumeAboutCardItem/ResumeAboutCardItem";
import { QRCodeCanvas } from "qrcode.react";
import { PORTFOLIO_DOMAIN, PORTFOLIO_URL } from "../../../constants/urls";

interface ResumeAboutMeProps extends GridProps {

};

export default function ResumeAboutMe(props: ResumeAboutMeProps): JSX.Element {
  const styles = useStyles();
  const degree = getEducation("belmont")!.details as Degree;

  return (
    <Grid item component="section" sx={styles.root} {...props} >
      <ResumeSectionTitle to="/dev">About Me</ResumeSectionTitle>

      <List sx={styles.list}>
        <ResumeAboutCardItem
          iconClass="fa-solid fa-house"
          title="City"
        >
          <Typography variant="subtitle1"><b>Nashville, TN</b></Typography>
        </ResumeAboutCardItem>

        <ResumeAboutCardItem
          iconClass="fa-solid fa-user-graduate"
          title="Education"
        >
          <Typography variant="subtitle1"><b>{degree.school.name}</b></Typography>
          <Typography textAlign="center">{degree.degree}</Typography>
          <Typography textAlign="center">{degree.major}</Typography>
        </ResumeAboutCardItem>

        <ResumeAboutCardItem
          iconClass="fa-solid fa-list-check"
          title="Personal Skills"
        >
          <List sx={styles.personalSkillsList}>
            <ListItem>Problem-solving</ListItem>
            <ListItem>Fast learner</ListItem>
            <ListItem>Attention to detail</ListItem>
            <ListItem>Project management</ListItem>
            <ListItem>Analytical thinking</ListItem>
            <ListItem>Time management</ListItem>
          </List>
        </ResumeAboutCardItem>

        <ResumeAboutCardItem
          iconClass="fa-solid fa-globe"
          title="Portfolio"
        >
          <Box sx={styles.qrContainer}>
            <QRCodeCanvas value={PORTFOLIO_URL} style={styles.qrCode}/>
            <Link component={RouterLink} to="/" >{PORTFOLIO_DOMAIN}</Link>
          </Box>
        </ResumeAboutCardItem>

      </List>
    </Grid>
  );
};
