import React from 'react';
import { Typography, Grid, Container, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ZachBio from './ZachBio';
import Education from '../atoms/Education';
import TechStack from './TechStack';

export default function DevHome() {
  return (
    <Container align='center'>
      <Typography variant='h1' sx={{ m: 2 }}>Software Development</Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <img
            src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
            width='100%'
            alt='MERN Stack software developer'
            style={{ maxWidth: 700 }}
          />
        </Grid>

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h3'>About Me</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ZachBio />
            </AccordionDetails>
          </Accordion>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h3'>Education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Education />
            </AccordionDetails>
          </Accordion>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h3'>Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* TODO */}
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h3'>Projects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* TODO */}
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h3'>Tech Stack</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TechStack />
            </AccordionDetails>
          </Accordion>
        </Grid>

      </Grid>
    </Container>
  )
}
