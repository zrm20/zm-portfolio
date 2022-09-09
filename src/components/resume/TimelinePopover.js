import { Divider, Typography } from '@mui/material'
import React from 'react'

export default function TimelinePopover({ event }) {
  if(!event) {
    return <></>
  };

  return (
    <div>
      <Typography sx={{ fontSize: '1.25rem'}}>{event.year} - {event.event}</Typography>
      <Divider />
      <Typography>{event.popover.content}</Typography>
    </div>
  )
};
