import { Paper, Grid } from '@mui/material';
import React from 'react';
import DeveloperSkills from './DeveloperSkills';
import GeneralInfo from './GeneralInfo';
import Header from './Header';
import PersonalInterests from './PersonalInterests';
import PersonalSkills from './PersonalSkills';
import SoftwareSkills from './SoftwareSkills';
import Timeline from './Timeline';
import Websites from './Websites';

const DevResume = React.forwardRef((props, ref) => {
  const { forPrint = false } = props;
  const styles = useStyles(forPrint);

  return (
    <div ref={ref}>
      <Paper
        sx={styles.paper}
        elevation={forPrint ? 0 : 3}
      >
        <Grid 
          container
          sx={styles.container}
        >
          <Grid
            item
            xs={12}
            sx={styles.header}
          >
            <Header forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={styles.genInfo}
          >
            <GeneralInfo forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={styles.timeline}
          >
            <Timeline forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={forPrint ? 6 : 12}
            md={6}
            sx={styles.personalSkills}
          >
            <PersonalSkills forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={forPrint ? 6 : 12}
            md={6}
            sx={styles.devSkills}
          >
            <DeveloperSkills forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={forPrint ? 4 : 12}
            md={4}
            sx={styles.softwareSkills}
          >
            <SoftwareSkills forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={forPrint ? 4 : 12}
            md={4}
            sx={styles.websites}
          >
            <Websites forPrint={forPrint} />
          </Grid>

          <Grid
            item
            xs={forPrint ? 4 : 12}
            md={4}
            sx={styles.personalInterests}
          >
            <PersonalInterests forPrint={forPrint} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
});

const useStyles = (forPrint) => ({
  paper: {
    width: forPrint ? '8.5in' : '93vw',
    height: forPrint ? '11in' : null,
    maxWidth: 1200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container: {
    mt: 2,
    mb: 2,
    justifyContent: 'space-evenly',
  },
  header: {
    mb: 1
  },
  genInfo: {
    mb: 1
  },
  timeline: {
    mb: 1
  },
  personalSkills: {
    mb: 1
  },
  devSkills: {
    mb: 1
  },
  softwareSkills: {
    mb: 1
  },
  websites: {
    mb: 1
  },
  personalInterests: {
    mb: 1
  },
});

export default DevResume;
