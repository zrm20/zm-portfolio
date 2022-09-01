import React from 'react';
import { Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, ListItemSecondaryAction } from '@mui/material';
import devExperiences from '../../assets/data/devExperiences';
import { Link as RouterLink } from 'react-router-dom';

function DevExperienceItem({ experience }) {
  return (
    <>
      <ListItem button component={RouterLink} to='/' /* TODO ADD LINK*/ >
        <ListItemAvatar>
          <Avatar
            src={experience.image ? experience.image : ''}
            alt={experience.name}
          >
            {
              // if no image present, display first char of name
              !experience.image &&
              experience.name.slice(0,1)
            }
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary={experience.name}
          secondary={experience.title}
        />
        {
          experience.range &&
          <ListItemSecondaryAction>
            <Typography color='textSecondary'>{experience.range}</Typography>
          </ListItemSecondaryAction>
        }
      </ListItem>
      <Divider />
    </>
  );
};

export default function DevExperience() {
  return (
    <List>
      {
        devExperiences.map(experience => (
          <DevExperienceItem experience={experience} />
        ))
      }
    </List>
  )
};
