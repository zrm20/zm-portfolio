import React from 'react';
import { Avatar, Typography } from '@mui/material';
import belmontLogo from '../../assets/images/belmont_logo.jpeg'

export default function Education() {
  return (
    <>
      <Avatar
        src={belmontLogo}
        alt="Bemont University"
        sx={{ width: 300, height: 300, mb: 2 }}
      />
      <Typography variant='h5' align='center' >
        2014 Belmont University
      </Typography>
      <Typography variant='subtitle1' align='center' >
        Bachelor of Science in Audio Engineering Technology
      </Typography>
      <Typography variant='subtitle2' align='center' >
        Minor in Business
      </Typography>
    </>
  )
}
