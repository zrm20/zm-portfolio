import React from 'react';
import { Container, Typography, Grid, Divider } from '@mui/material';
import { primaryStack, otherStack } from '../../assets/data/techStack';
import { v4 as uuid } from 'uuid';

export default function DeveloperSkills({ forPrint = false }) {
  return (
    <Container>
      <Typography variant='h6'>
        Developer Skills
      </Typography>
      <Grid container>
        {
          primaryStack.map(el => (
            <Grid item xs={forPrint ? 3 : 6} sm={3} mb={1} key={uuid()} >
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
            <Grid item key={uuid()}>
              <i className={skill.icon}></i>
              <Typography variant='body2' sx={{ fontSize: '.6rem' }}>{skill.name}</Typography>

            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
};