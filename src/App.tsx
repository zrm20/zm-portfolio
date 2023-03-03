import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import { Layout } from './components/partials';
import IntroBackdrop from './components/atoms/IntroBackdrop';
import { AnimatePresence } from 'framer-motion';
import { FadeIn } from './components/animations';
import { AppNavigator } from './navigation';

export default function App() {
  const [backdropOpen, setBackdropOpen] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setBackdropOpen(false)
    }, 6000);

  }, [setBackdropOpen]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AnimatePresence mode="wait">
          {
            backdropOpen ?
              <IntroBackdrop />
              :
              <FadeIn style={styles.root}>
                <Layout>
                  <AppNavigator />
                </Layout>
              </FadeIn>
          }
        </AnimatePresence>

      </ThemeProvider>
    </BrowserRouter>
  );
};

const styles = {
  root: {
    width: '100vw',
    height: '100vh'
  }
};