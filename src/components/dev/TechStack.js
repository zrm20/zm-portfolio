import React from 'react';
import { Grid, Tooltip, Typography, Container } from '@mui/material';
import 'devicon';
import { useTheme } from '@emotion/react';
import techList from '../../assets/data/techStack';

function TechItem({ technology, palette }) {
  return (
    <div style={{ margin: 5}}>
      <Tooltip
        title={technology.projects?.toString()}
        placement='top'
      >
        <Container
          sx={{
            width: 90,
            height: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '3px solid',
            borderColor: 'primary.main'
          }}
        >
          <i
            className={technology.icon}
            style={{
              fontSize: '3.25rem'
            }}
          />
        </Container>
      </Tooltip>
      <Typography>{technology.name}</Typography>
    </div>
  )
}

export default function TechStack() {
  const { palette } = useTheme();

  return (
    <Grid container spacing={2}>
      {
        techList.map(category => (
          <Grid item xs={12}>
            <Typography variant='h5' gutterBottom >{category.title}</Typography>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {
                category.stack.map(technology => (
                  <TechItem technology={technology} palette={palette} />
                ))
              }
            </Container>
          </Grid>
        ))
      }
    </Grid>
  )
}
