import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Timeline() {
  return (
    <Container sx={styles.root}>
      <Typography variant='h6'>
        History
      </Typography>

      
    </Container>
  )
};

const styles = {
  root: {
  },
  timeline: {
    rotate: '-90deg',
    '& .MuiTypography-root': {
      
    }
  }
}
