import { Backdrop, Paper, Grid, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import DeveloperSkills from '../resume/DeveloperSkills';
import GeneralInfo from '../resume/GeneralInfo';
import Header from '../resume/Header';
import PersonalInterests from '../resume/PersonalInterests';
import PersonalSkills from '../resume/PersonalSkills';
import SoftwareSkills from '../resume/SoftwareSkills';
import Timeline from '../resume/Timeline';
import Websites from '../resume/Websites';
import resumeTheme from '../../styles/resumeTheme';

export default function DevResume() {
  useEffect(() => {document.title = 'Zach McCoy | Resume'}, []);
  return (
    <div style={styles.root}>
      <Backdrop open >
        <ThemeProvider theme={resumeTheme}>
          <Paper sx={styles.paper} elevation={0}>
            <Grid container sx={styles.container}>
              <Grid item xs={12} sx={styles.header}>
                <Header />
              </Grid>
              <Grid item xs={12} sx={styles.genInfo}>
                <GeneralInfo />
              </Grid>
              <Grid item xs={12} sx={styles.timeline}>
                <Timeline />
              </Grid>
              <Grid item xs={12} sm={6} sx={styles.personalSkills}>
                <PersonalSkills />
              </Grid>
              <Grid item xs={12} sm={6} sx={styles.devSkills}>
                <DeveloperSkills />
              </Grid>
              <Grid item xs={12} sm={4} sx={styles.softwareSkills}>
                <SoftwareSkills />
              </Grid>
              <Grid item xs={12} sm={4} sx={styles.websites}>
                <Websites />
              </Grid>
              <Grid item xs={12} sm={4} sx={styles.personalInterests}>
                <PersonalInterests />
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </Backdrop>
    </div>
  )
};

const styles = {
  root: {
    width: '100vw',
    height: '100%',
  },
  paper: {
    width: '8.5in',
    height: '11in',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '97%',
    height: '97%'
  },
  header: {
    height: '12%'
  },
  genInfo: {
    height: '13%'
  },
  timeline: {
    height: '25%'
  },
  personalSkills: {
    height: '25%'
  },
  devSkills: {
    height: '25%'
  },
  softwareSkills: {
    height: '25%'
  },
  websites: {
    height: '25%'
  },
  personalInterests: {
    height: '25%'
  }
}
