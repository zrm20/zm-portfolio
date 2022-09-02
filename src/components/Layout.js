import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, IconButton, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link as RouterLink } from 'react-router-dom';

export default function Layout({ children }) {
  const [anchorAudioNav, setAnchorAudioNav] = useState(null);
  const [anchorSoftwareNav, setAnchorSoftwareNav] = useState(null);

  function handleOpenSoftwareMenu(evt) {
    setAnchorSoftwareNav(evt.currentTarget);
  }

  function handleOpenAudioMenu(evt) {
    setAnchorAudioNav(evt.currentTarget)
  };

  function handleCloseSoftwareMenu(evt) {
    setAnchorSoftwareNav(null);
  }

  function handleCloseAudioMenu(evt) {
    setAnchorAudioNav(null)
  };

  return (
    <main style={styles.root}>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant='h3'
            sx={styles.miniTitle}
            component={RouterLink}
            to='/'
          >
            <sup>Z</sup>
            <sub>M</sub>
          </Typography>
          <Typography
            variant='h3'
            sx={styles.title}
            component={RouterLink}
            to='/'
          >
            <sup>Zach</sup>
            <sub>McCoy</sub>
          </Typography>

          <div style={styles.intLinks}>
            <Button sx={{ color: 'primary.contrastText'}} onClick={handleOpenSoftwareMenu}>Software</Button>
            <Button sx={{ color: 'primary.contrastText'}} onClick={handleOpenAudioMenu}>Audio</Button>

            <Menu
              anchorEl={anchorSoftwareNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorSoftwareNav)}
              onClose={handleCloseSoftwareMenu}
            >
              <MenuItem component={RouterLink} to='/dev?section=about' onClick={handleCloseSoftwareMenu}>
                <Typography>About Me</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/dev?section=education' onClick={handleCloseSoftwareMenu}>
                <Typography>Education</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/dev?section=experience' onClick={handleCloseSoftwareMenu}>
                <Typography>Experience</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/dev?section=projects' onClick={handleCloseSoftwareMenu}>
                <Typography>Projects</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/dev?section=stack' onClick={handleCloseSoftwareMenu}>
                <Typography>Tech Stack</Typography>
              </MenuItem>
            </Menu>
            
            <Menu
              anchorEl={anchorAudioNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorAudioNav)}
              onClose={handleCloseAudioMenu}
            >
              <MenuItem component={RouterLink} to='/audio?section=about' onClick={handleCloseAudioMenu}>
                <Typography>About Me</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/audio?section=education' onClick={handleCloseAudioMenu}>
                <Typography>Education</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/audio?section=tours' onClick={handleCloseAudioMenu}>
                <Typography>Tours</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to='/audio?section=services' onClick={handleCloseAudioMenu}>
                <Typography>Services</Typography>
              </MenuItem>
            </Menu>
            
          </div>

          <div style={styles.extLinks}>
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
  miniTitle: {
    textDecoration: 'none',
    display: {
      xs: 'inline',
      sm: 'none'
    },
    '& sup': {
      color: 'primary.light'
    },
    '& sub': {
      color: 'primary.main'
    }
  },
  title: {
    textDecoration: 'none',
    display: {
      xs: 'none',
      sm: 'inline'
    },
    '& sup': {
      color: 'primary.light'
    },
    '& sub': {
      color: 'primary.main'
    }
  },
  intLinks: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1
  },
  extLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
  }

};
