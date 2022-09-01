import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Layout({ children }) {
  return (
    <main style={styles.root}>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant='h3'
            sx={styles.title}
          >
            <sup>Zach</sup>
            <sub>McCoy</sub>
          </Typography>

          <div>
            <IconButton component='a' href='https://github.com/zrm20' target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton component='a' href='https://www.linkedin.com/in/zachmccoy/' target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <section style={styles.content}>
        {children}
      </section>
      <footer style={styles.footer}>
        <Typography variant='textSecondary'>{'\u00A9'} Zach McCoy</Typography>
      </footer>
    </main>
  )
};

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    width: '100%',
    flex: 1,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    '& sup': {
      color: 'primary.light'
    },
    '& sub': {
      color: 'primary.main'
    }
  }

};
