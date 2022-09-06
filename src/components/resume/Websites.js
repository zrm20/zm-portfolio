import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';
import contactInfo from '../../assets/data/contactInfo';
import QRCode from 'qrcode.react';
import { Link as RouterLink } from 'react-router-dom';

export default function Websites() {
  return (
    <div style={styles.root}>
      <Typography variant='h6' >
        Websites
      </Typography>
      <Grid container >
        <Grid item xs={6}>
          <Container sx={styles.qrContainer}>
            <Typography variant='body2'>Portfolio</Typography>
            <RouterLink to='/dev'>
              <QRCode
                renderAs='canvas'
                value={contactInfo.portfolio}
                style={styles.qrcode}
              />
            </RouterLink>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container sx={styles.qrContainer}>

            <Typography variant='body2'>LinkedIn</Typography>
            <a href={contactInfo.linkedin}>
              <QRCode
                renderAs='canvas'
                value={contactInfo.linkedin}
                style={styles.qrcode}
              />
            </a>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' gutterBottom>
            This resume is interactive. Check it out at <Link component={RouterLink} to='/dev' color='textSecondary'>zachmccoy.dev</Link>
          </Typography>
          <Typography variant='body2' color='secondary'>
            Built with React.js <i className='devicon-react-original' ></i>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
};

const styles = {
  root: {
    width: '100%',
    height: '100%',
  },
  qrContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWeight: 2,
    borderStyle: 'solid',
    borderColor: 'primary.dark',
    borderRadius: 2,
    width: '90%',
    mb: 1
  },
  qrcode: {
    width: 90,
    height: 90
  }
}