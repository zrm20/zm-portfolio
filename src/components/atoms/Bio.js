import { Typography } from '@mui/material';
import React from 'react';

export default function Bio({ text = '' }) {
  const paragraphs = text.split('\n')

  return (
    <>
      {
        paragraphs.map((paragraph, i) => (
          <Typography key={'bio-' + i} align='left' sx={{ mb: 2 }}>
            {paragraph}
          </Typography>
        ))
      }
    </>
  )
}
