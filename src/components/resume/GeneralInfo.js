import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import genInfo from '../../assets/data/genInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function GeneralInfo({ attributes = [] }) {
  return (
    <Container sx={{ mb: 1 }}>
      <Typography variant='h6' gutterBottom>General Info</Typography>
      <Grid container justifyContent='space-evenly'>
        {
          genInfo.map(el => (
            <Grid item key={el.title} sx={styles.infoItem}>
              <Typography sx={styles.title}>{el.title}</Typography>
              <FontAwesomeIcon icon={el.icon || faCircleInfo} />
              <Typography variant='subtitle2' sx={styles.value}>{el.value}</Typography>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
};

const styles = {
  infoItem: {
    '& svg': { 
      fontSize: '1.5rem', 
      m: 1,
      color: 'primary.main'
    }
  },
  title: {
    fontSize: '.6rem', 
    color: 'textSecondary'
  },
  value: {
    color: 'textSecondary'
  }
};

