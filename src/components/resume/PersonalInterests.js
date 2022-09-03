import { Container , Typography} from '@mui/material'
import React from 'react'

export default function PersonalInterests() {
  return (
    <Container sx={styles.root}>
      <Typography variant='h6'>
        Personal Interests
      </Typography>
    </Container>
  )
};

const styles = {
  root: {
  }
}