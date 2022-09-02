import React, { useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import audio3 from '../../assets/images/audio3.JPG';
import Bio from '../atoms/Bio';
import audioBio from '../../assets/data/audioBio';
import Education from '../atoms/Education';
import AudioTours from './AudioTours';
import AudioServices from './AudioServices';
import { useSearchParams } from 'react-router-dom';
import Section from '../atoms/Section';

const sectionList = [
  {
    name: 'about',
    label: 'About Me',
    component: () => <Bio text={audioBio} />
  },
  {
    name: 'education',
    label: 'Education',
    component: () => <Education />
  },
  {
    name: 'tours',
    label: 'Tours',
    component: () => <AudioTours />
  },
  {
    name: 'services',
    label: 'Services',
    component: () => <AudioServices />
  },
];

export default function AudioHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {document.title = 'ZM Audio'}, []);
  const sectionParam = searchParams.get('section');

  function handleChangeSection(sectionName) {
    if(sectionName===sectionParam) {
      setSearchParams('');
    } else {
      setSearchParams({section: sectionName})
    };
  };

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

        {
          sectionList.map(section => (
            <Section
              key={section.name}
              section={section}
              sectionParam={sectionParam}
              handleChangeSection={handleChangeSection}
            />
          ))
        }
      </Grid>
    </Container>
  )
}
