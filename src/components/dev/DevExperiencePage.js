import React from 'react';
import { Button, Typography, Container, Toolbar, IconButton, Grid } from '@mui/material';
import devExperiences from '../../assets/data/devExperiences';
import { useParams, Link as RouterLink } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function DevExperiencePage() {
  const { index } = useParams();
  const indexNum = parseInt(index);
  const experience = devExperiences[indexNum];

  if (!experience) {
    return (
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography sx={{ m: 1 }}>No experience with that id</Typography>
        <Button component={RouterLink} to='/dev' variant='contained'>Dev Home</Button>
      </Container>
    )
  };

  document.title = experience.name;

  let descriptionParagraphs;
  if(experience.description){
    descriptionParagraphs = experience.description.split('\n');
  };

  function prevIndex() {
    if (indexNum === 0) {
      return devExperiences.length - 1;
    } else {
      return indexNum - 1;
    }
  };

  function nextIndex() {
    if (indexNum === (devExperiences.length - 1)) {
      return 0;
    } else {
      return indexNum + 1;
    }
  };


  return (
    <div styles={styles.root}>
      <Typography variant='h2' align='center' sx={{ m: 1 }}>{experience.title}</Typography>
      <Toolbar sx={styles.toolbar}>
        <IconButton component={RouterLink} to={`/dev/experience/${prevIndex()}`}>
          <NavigateBeforeIcon />
        </IconButton>

        <Typography variant='h3' align='center'>{experience.name}</Typography>

        <IconButton component={RouterLink} to={`/dev/experience/${nextIndex()}`}>
          <NavigateNextIcon />
        </IconButton>
      </Toolbar>

      <Grid container sx={styles.content} spacing={1}>
        {
          experience.image &&
          <Grid item sx={styles.image} xs={12}>
            <img
              src={experience.image}
              alt={experience.name}
            />
          </Grid>
        }

        {
          experience.range &&
          <Grid item xs={12}>
            <Typography align='center' variant='h5'>{experience.range}</Typography>
          </Grid>
        }
        {
          experience.description &&
          <Grid item xs={12}>
            {
              descriptionParagraphs.map((paragraph, i) => (
                <Typography key={'bio-' + i} align='left' sx={{ mb: 2, width: '90%' }}>
                  {paragraph}
                </Typography>
              ))
            }
          </Grid>
        }
      </Grid>
    </div>
  )
};

const styles = {
  root: {
    width: '100%',
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    '& .MuiGrid-item': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  image: {
    '& img': {
      width: '100%',
      maxWidth: 400,
      borderRadius: 5
    }
  }
}
