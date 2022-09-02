import { Backdrop, Paper, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import DeveloperSkills from '../resume/DeveloperSkills';
import GeneralInfo from '../resume/GeneralInfo';
import Header from '../resume/Header';
import PersonalInterests from '../resume/PersonalInterests';
import PersonalSkills from '../resume/PersonalSkills';
import SoftwareSkills from '../resume/SoftwareSkills';
import Timeline from '../resume/Timeline';
import Websites from '../resume/Websites';

export default function DevResume() {
  useEffect(() => {document.title = 'Zach McCoy | Resume'}, []);
  return (
    <div>
      <Backdrop open>
        <Paper sx={styles.paper}>
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
      </Backdrop>
    </div>
  )
};

const styles = {
  paper: {
    width: '99vw',
    height: '99vh',
    maxWidth: '8.5in',
    maxHeight: '11in',
    backgroundColor: 'white',
    color: 'black'
  },
  container: {
    height: '100%'
  },
  header: {
  },
  genInfo: {
  },
  timeline: {
  },
  personalSkills: {
  },
  devSkills: {
  },
  softwareSkills: {
  },
  websites: {
  },
  personalInterests: {
  }
}
