import React from 'react';
import { Container, Typography, Grid, Divider } from '@mui/material';
import { primaryStack, otherStack } from '../../assets/data/techStack';

export default function DeveloperSkills({ forPrint = false }) {
  return (
    <Container>
      <Typography variant='h6'>
        Developer Skills
      </Typography>
      <Grid container>
        {
          primaryStack.map(el => (
            <Grid item xs={forPrint ? 3 : 6} md={3} mb={1}>
              <Container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '& i': {
                    fontSize: '2.5rem',
                  },
                  '& p': {
                    fontSize: '.6rem'
                  }
                }}
              >
                <i className={el.icon}></i>
                <Typography variant='body2'>{el.name}</Typography>
              </Container>
            </Grid>
          ))
        }
      </Grid>

      <Divider sx={{ mb: 1 }} />
      
      <Grid 
        container
        spacing={1}
        sx={{
          justifyContent: 'center'
        }}
      >
        {
          otherStack.map(skill => (
            <Grid item>
              <i className={skill.icon}></i>
              <Typography variant='body2' sx={{ fontSize: '.6rem' }}>{skill.name}</Typography>

            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
};