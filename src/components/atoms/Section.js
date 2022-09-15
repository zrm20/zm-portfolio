import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Section({ section, isOpen, handleChangeSection }) {
  return (
    <Grid item xs={12} md={isOpen? 12 : 6} >
      <Accordion expanded={isOpen} onChange={() => handleChangeSection(section.name)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant='h3'>{section.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          { section.component() }
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
};
