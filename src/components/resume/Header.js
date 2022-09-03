import { Avatar, Container, Grid, IconButton, List, ListItem, Typography } from '@mui/material'
import React from 'react';
import headshot from '../../assets/images/headshot.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <Container sx={styles.root}>
      <Grid container sx={styles.container}>
        <Grid item sx={styles.headshot}>
          <Avatar
            src={headshot}
            alt="Zach McCoy"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item sx={{ flex: 1, ml: 3 }}>
          <Typography variant='h4'>Zach McCoy</Typography>
          <Typography variant='h6'
            sx={{ fontSize: '.9rem' }}
          >
            Bachelor of Science in Audio Engineering
          </Typography>
          <Typography color='textSecondary' sx={{ fontSize: '.8rem' }}>
            “A self-driven, lifelong learner with a well-rounded tool-kit of technical and personal skills. Always striving for growth and self-improvement.”
          </Typography>
        </Grid>
        <Grid item sx={styles.contact}>
          <div>
            <Typography>
              Nashville, TN
            </Typography>
            <IconButton size='small' disabled>
              <LocationOnIcon />
            </IconButton>
          </div>
          <div>
            <Typography>
              /in/zachmccoy
            </Typography>
            <IconButton size='small' component='a' href='https://www.linkedin.com/in/zachmccoy' target='_blank' >
              <LinkedInIcon />
            </IconButton>
          </div>
          <div>
            <Typography>
              /zrm20
            </Typography>
            <IconButton size='small' component='a' href='https://www.github.com/zrm20' target='_blank' >
              <GitHubIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
};

const styles = {
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {

  },
  headshot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    '& div': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
}
