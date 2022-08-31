import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Layout({ children }) {
  return (
    <main style={styles.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3'><sup>Zach</sup><sub>McCoy</sub></Typography>


        </Toolbar>
      </AppBar>
      <section style={styles.content}>
        {children}
      </section>
    </main>
  )
};

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    width: '100%',
    flex: 1,
  }
};
