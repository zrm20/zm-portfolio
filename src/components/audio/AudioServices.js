import { Divider, List, Typography, ListItem } from '@mui/material';
import React from 'react';
import audioServices from '../../assets/data/audioServices';

function AudioServiceItem({ service }) {
  return (
    <>
      <ListItem>
        <Typography>{service.name}</Typography>
      </ListItem>
      <Divider />
    </>
  )
};

export default function AudioServices() {
  return (
    <List>
      {
        audioServices.map(service => (
          <AudioServiceItem key={service.name} service={service} />
        ))
      }
    </List>
  )
};
