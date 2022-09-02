import React from 'react';
import { Divider, List, ListItemText, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from '@mui/material';
import devProjects from '../../assets/data/devProjects';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectItem({ project, index }) {
  return (
    <>
      <ListItem button component={RouterLink} to={`/dev/project/${index}`} /* TODO ADD LINK*/ >
        <ListItemAvatar>
        <Avatar
            src={project.image ? project.image : ''}
            alt={project.name}
          >
            {
              // if no image present, display first char of name
              !project.image &&
              project.name.slice(0,1)
            }
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary={project.name}
          secondary={project.subtitle}
        />
        {
          project.repo &&
          <ListItemSecondaryAction>
            <IconButton component='a' target='_blank' href={project.repo}>
              <GitHubIcon />
            </IconButton>
          </ListItemSecondaryAction>
        }
      </ListItem>
      <Divider />
    </>
  )
};

export default function DevProjects() {
  return (
    <List>
      {
        devProjects.map((project, i) => (
          <ProjectItem key={project.name} project={project} index={i} />
        ))
      }
    </List>
  )
};
