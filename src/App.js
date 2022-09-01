import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import Layout from './components/Layout';
import Home from './components/Home';
import DevRouter from './components/dev/DevRouter';
import AudioRouter from './components/audio/AudioRouter';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/dev/*' element={<DevRouter />} />
            <Route path='/audio/*' element={<AudioRouter />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};