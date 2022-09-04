import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import contactInfo from '../../assets/data/contactInfo';
import QRCode from 'qrcode.react';
import { Link as RouterLink } from 'react-router-dom';

export default function Websites() {
  return (
    <Container sx={styles.root}>
      <Typography variant='h6' >
        Websites
      </Typography>
      <Grid container justifyContent='space-evenly'>
        <Grid item >
          <Typography variant='body2'>Portfolio</Typography>
          <RouterLink to='/dev'>
            <QRCode
              renderAs='canvas'
              value={contactInfo.portfolio}
            />
          </RouterLink>
        </Grid>
        <Grid item >
          <Typography variant='body2'>Linkedin</Typography>
          <a href={contactInfo.linkedin}>
            <QRCode
              renderAs='canvas'
              value={contactInfo.linkedin}
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  )
};

const styles = {
  root: {
  }
}