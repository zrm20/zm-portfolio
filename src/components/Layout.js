import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, IconButton, LinearProgress, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Layout({ children }) {
  return (
    <main style={styles.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3'><sup>Zach</sup><sub>McCoy</sub></Typography>

          <IconButton>
            <FontAwesomeIcon icon={faGithub}/>
          </IconButton>
          <IconButton>
            <FontAwesomeIcon icon={faLinkedin}/>
          </IconButton>
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
  }
};
