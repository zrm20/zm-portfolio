import React, { useEffect } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import devBio from '../../assets/data/devBio';
import Education from '../atoms/Education';
import TechStack from './TechStack';
import DevExperience from './DevExperience';
import DevProjects from './DevProjects';
import Bio from '../atoms/Bio';
import { useSearchParams } from 'react-router-dom';
import Section from '../atoms/Section';

const sectionList = [
  {
    name: 'about',
    label: 'About Me',
    component: () => <Bio text={devBio} />
  },
  {
    name: 'education',
    label: 'Education',
    component: () => <Education />
  },
  {
    name: 'experience',
    label: 'Experience',
    component: () => <DevExperience />
  },
  {
    name: 'projects',
    label: 'Projects',
    component: () => <DevProjects />
  },
  {
    name: 'stack',
    label: 'Tech Stack',
    component: () => <TechStack />
  }
];

export default function DevHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => { document.title = 'ZM Software' }, []);
  const sectionParam = searchParams.get('section');

  function handleChangeSection(sectionName) {
    if (sectionName === sectionParam) {
      setSearchParams('');
    } else {
      setSearchParams({ section: sectionName })
    };
  };

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
};
