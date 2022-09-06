import { Avatar, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react';
import headshot from '../../assets/images/headshot.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header({ forPrint = false }) {
  const styles = useStyles(forPrint)

  return (
    <Container sx={styles.root}>
      <Grid container sx={styles.container}>
        <Grid
          item
          sx={styles.headshot}
          xs={forPrint ? 2 : 12}
          md={2}
        >
          <Avatar
            src={headshot}
            alt="Zach McCoy"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>

        <Grid
          item
          sx={styles.textContainer}
          xs={forPrint ? 7 : 12}
          md={7}
        >
          <Typography variant='h4'>
            Zach McCoy
          </Typography>
          <Typography variant='h6'>
            Bachelor of Science in Audio Engineering
          </Typography>
          <Typography color='textSecondary'>
            “A self-driven, lifelong learner with a well-rounded tool-kit of technical and personal skills. Always striving for growth and self-improvement.”
          </Typography>
        </Grid>

        <Grid
          item
          sx={styles.contactInfo}
          xs={forPrint ? 3 : 12}
          md={3}
        >
          <div>
            <Typography>Nashville, TN</Typography>
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

const useStyles = (forPrint) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headshot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    textAlign: {
      xs: forPrint ? 'left' : 'center',
      md: 'left'
    },
    flex: 1,
    '& h4': {
      ml: {
        xs: forPrint ? 1 : 0,
        md: 1
      },
      mb: forPrint ? 0 : 1
    },
    '& h6': {
      ml: {
        xs: forPrint ? 1 : 0,
        md: 1
      },
      fontSize: '.8rem',
      mb: forPrint ? 0 : 1
    },
    '& p': {
      ml: {
        xs: forPrint ? 1 : 0,
        md: 1
      },
      fontSize:'.7rem',
      mb: forPrint ? 0 : 1
    }
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      xs: forPrint ? 'flex-end' : 'center',
      md: 'flex-end'
    },
    justifyContent: 'space-evenly',
    '& div': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
});
