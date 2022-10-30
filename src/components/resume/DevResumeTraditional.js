import { Paper, Grid } from '@mui/material';
import React from 'react';
import DeveloperSkills from './DeveloperSkills';
import GeneralInfoTraditional from './GenInfoTraditional';
import Header from './Header';
import HistoryTraditional from './HistoryTraditional';
import Websites from './Websites';

const DevResumeTraditional = React.forwardRef((props, ref) => {
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
            xs={forPrint ? 3 : 12}
            md={3}
            sx={styles.sidebar}
          >
            <GeneralInfoTraditional />
          </Grid>

          <Grid
            item
            xs={forPrint ? 9 : 12}
            md={9}
            sx={styles.content}
          >
            <HistoryTraditional />
          </Grid>

          <Grid item xs={forPrint ? 5 : 12} md={5} >
            <Websites />
          </Grid>

          <Grid item xs={forPrint ? 6 : 12} md={6} >
            <DeveloperSkills forPrint/>
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
    maxWidth: '8.5in',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '75px'
  },
  container: {
    mt: 2,
    mb: 2,
    justifyContent: 'space-evenly',
  },
  header: {
    mb: 0
  },
  genInfo: {
    mb: 0
  },
  sidebar: {
    flex: 1,
  },
  content: {
  }
});

export default DevResumeTraditional;
