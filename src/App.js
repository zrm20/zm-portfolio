import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import Layout from './components/Layout';
import Home from './components/Home';
import DevHome from './components/dev/DevHome';
import AudioHome from './components/audio/AudioHome';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dev/*' element={<DevHome />} />
            <Route path='/audio/*' element={<AudioHome />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};