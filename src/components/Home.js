import React, { useEffect } from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { Container } from '@mui/system';
import headshot from '../assets/images/headshot.jpeg';
import audioImg from '../assets/images/audio2.JPG';
import { Link as RouterLink } from 'react-router-dom';

const codeImgUrl = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
export default function Home() {
  useEffect(() => {document.title = 'Zach McCoy'}, [])

  return (
    <Container align='center'>

      <Container sx={{ m: 2 }}>
        <img
          src={headshot}
          alt='Zach McCoy Headshot'
          style={styles.image}
        />
        <Typography variant='subtitle1'>
          “A self-driven, lifelong learner with a well-rounded tool-kit of technical and personal skills. Always striving for growth and self-improvement.”
        </Typography>
      </Container>

      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Link component={RouterLink} to="/dev">Software Developer</Link>
          <img
            src={codeImgUrl}
            width='90%'
            alt='MERN Stack Software Engineer'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Link component={RouterLink} to="/audio">Audio Engineer</Link>
          <img
            src={audioImg}
            width='90%'
            alt='Monitor Engineer'
          />
        </Grid>
      </Grid>
    </Container>
  )
};

const styles = {
  image: {
    width: '50%',
    borderRadius: '50%',
  }
}
