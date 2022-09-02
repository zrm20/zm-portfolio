import { Container } from '@mui/material'
import React from 'react';

export default function Header() {
  return (
    <Container sx={styles.root}>
      HEADER
    </Container>
  )
};

const styles = {
  root: {
    border: '1px solid red' // TODO DELETE THIS
  }
}
