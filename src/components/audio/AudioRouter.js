import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AudioHome from './AudioHome';

export default function AudioRouter() {
  return (
    <Routes>
      <Route path='/' element={<AudioHome />} />
    </Routes>
  )
};