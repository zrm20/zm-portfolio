import { Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import tours from '../../assets/data/tours';

function TourItem({ tour }) {
  return (
    <>
      <ListItem /* TODO Make link */ >
        <ListItemAvatar >
          {tour.time}
        </ListItemAvatar>
        <ListItemText
          sx={{ ml: 2}}
          primary={tour.name}
          secondary={tour.artist}
        />
      </ListItem>
      <Divider />
    </>
  )
};

export default function AudioTours() {
  return (
    <List>
      {
        tours.map(tour => (
          <TourItem key={tour.name} tour={tour} />
        ))
      }
    </List>
  )
}
