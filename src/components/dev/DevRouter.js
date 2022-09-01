import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DevHome from './DevHome';

export default function DevRouter() {
  return (
    <Routes>
      <Route path='/' element={<DevHome />} />
    </Routes>
  )
};
