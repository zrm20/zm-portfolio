import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import Layout from './components/Layout';
import Home from './components/pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};