import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import { Layout } from './components/partials';
import Home from './components/Home';
import DevRouter from './components/dev/DevRouter';
import AudioRouter from './components/audio/AudioRouter';
import IntroBackdrop from './components/atoms/IntroBackdrop';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn } from './components/animations';

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
                  {/* <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dev/*' element={<DevRouter />} />
                    <Route path='/audio/*' element={<AudioRouter />} />
                    <Route path='/*' element={<Home />} />
                  </Routes> */}
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