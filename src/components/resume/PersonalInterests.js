import React from 'react';
import { Container , Typography, Grid, Avatar, Tooltip } from '@mui/material';
import personalInterests from '../../assets/data/personalInterests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PersonalInterests({ forPrint = false }) {
  const styles = useStyles(forPrint);

  return (
    <Container sx={styles.root}>
      <Typography variant='h6' gutterBottom>
        Personal Interests
      </Typography>
      <Grid container sx={styles.container} spacing={forPrint ? 0 : 1}>
        {
          personalInterests.map(hobby => (
            <Grid
              key={hobby.name}
              item
              xs={4}
              sx={styles.hobbyItem}
            >
              <Tooltip
                title={hobby.popoverText}
              >
                <Avatar >
                  <FontAwesomeIcon icon={hobby.icon}/>
                </Avatar>
              </Tooltip>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
};

const useStyles = (forPrint) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flex: 1
  },
  hobbyItem: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   '& .MuiAvatar-root': {
      width: 60,
      height: 60
   },
   '& svg': {
    fontSize: '2rem'
   }
  }
});