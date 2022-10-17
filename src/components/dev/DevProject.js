import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Toolbar, Typography, Fab } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import devProjects from '../../assets/data/devProjects';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { allTech } from '../../assets/data/techStack';
import { Link as RouterLink } from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { v4 as uuid } from 'uuid';

export default function DevProject() {
  const { index } = useParams();

  const project = devProjects[index];

  useEffect(() => {
    document.title = project ? project.name : 'No Project Found';
  }, [project]);

  if (!project) {
    return (
      <Container sx={{ pt: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <Typography align='center'>No project with that id : (</Typography>
        <Skeleton variant='rect' animation='wave' />
        <Button component={RouterLink} to='/dev?section=projects' >Back to Projects</Button>
      </Container>
    )
  };

  const indexNum = parseInt(index);

  const populatedStack = project.stack.map(techName => {
    const fullItem = allTech.find(techItem => techItem.name === techName);

    if (fullItem) {
      return fullItem
    } else {
      return { name: techName }
    }
  });

  function prevIndex() {
    if (indexNum === 0) {
      return devProjects.length
    } else {
      return indexNum - 1
    }
  };

  function nextIndex() {
    if (indexNum === (devProjects.length - 1)) {
      return 0
    } else {
      return indexNum + 1
    }
  };

  return (
    <Container sx={styles.root} >
      <Fab sx={{ position: 'fixed', bottom: '5%' }} component={RouterLink} to='/dev?section=projects'>
        <FormatListBulletedIcon />
      </Fab>
      <Toolbar sx={styles.toolbar}>
        <IconButton component={RouterLink} to={`/dev/project/${prevIndex()}`}>
          <NavigateBeforeIcon />
        </IconButton>
        <Typography variant='h1' align='center'>{project.name}</Typography>
        <IconButton component={RouterLink} to={`/dev/project/${nextIndex()}`}>
          <NavigateNextIcon />
        </IconButton>
      </Toolbar>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={styles.links}>
          {
            project.website &&
            <IconButton component='a' href={project.website} target='_blank' >
              <LanguageIcon />
            </IconButton>
          }
          {
            project.repo &&
            <IconButton component='a' href={project.repo} target='_blank' >
              <GitHubIcon />
            </IconButton>
          }
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={project.image}
            width='100%'
            alt={project.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h3'>Tech Stack</Typography>
          <List>
            {
              populatedStack.map(el => (
                <ListItem key={uuid()}>
                  <ListItemAvatar>
                    <Avatar sx={{ color: 'primary.main' }}>
                      {el.icon ? <i className={el.icon}></i> : el.name.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    {el.name}
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h3'>Description</Typography>
          <Typography color='textSecondary' align='center'>{project.subtitle}</Typography>
          <Divider sx={{ m: 1 }} />
          {
            project.description.split('\n').map(paragraph => (
              <Typography key={uuid()} gutterBottom>{paragraph}</Typography>
            ))
          }
        </Grid>
        {
          project.website &&
          <Grid xs={12} sx={styles.demo}>
            <Typography variant='h4' align='center'>Demo</Typography>
            <iframe
              title='Project Demo'
              src={project.website}
            />
          </Grid>
        }
      </Grid>
    </Container>
  )
};

const styles = {
  root: {
    width: '100%',
    height: '100%',
    'h3': {
      textAlign: 'center',
      mb: 2
    },
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    mt: 2,
    mb: 2,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& a': {
      m: 1
    },
    '& svg': {
      color: 'secondary.main',
      fontSize: '2rem'
    }
  },
  demo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& iframe': {
      width: '95%',
      maxWidth: '400',
      height: 1000
    }
  }
};
