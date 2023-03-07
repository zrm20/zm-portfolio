import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

import styles from './Layout.styles';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import NavDrawer from '../NavDrawer/NavDrawer';

export default function Layout(props: { children?: JSX.Element }): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  function toggleDrawer(): void {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <main style={styles.root}>
      <NavBar toggleDrawer={toggleDrawer} isMobileView={isMobileView} />
      {
        isMobileView &&
        <NavDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      }

      <Box sx={styles.content} component="section">
        {props.children}
      </Box>

      <Footer />
    </main>
  );
};
