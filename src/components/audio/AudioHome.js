import React, { useEffect } from 'react';
import { Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import audio3 from '../../assets/images/audio3.JPG';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Bio from '../atoms/Bio';
import audioBio from '../../assets/data/audioBio';

export default function AudioHome() {
  useEffect(() => {document.title = 'ZM Audio'}, []);

  return (
    <Container align='center'>
      <Typography variant='h1' sx={{ m: 2 }}>Audio Engineer</Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <img
            src={audio3}
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
              <Bio text={audioBio} />
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
              {/* TODO */}
            </AccordionDetails>
          </Accordion>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='h3'>Tours</Typography>
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
              <Typography variant='h3'>Services</Typography>
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
              <Typography variant='h3'>Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* TODO */}
            </AccordionDetails>
          </Accordion>
        </Grid>

      </Grid>
    </Container>
  )
}
