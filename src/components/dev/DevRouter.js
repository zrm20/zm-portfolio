import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DevHome from './DevHome';
import DevProject from './DevProject';
import DevResumePage from './DevResumePage';

export default function DevRouter() {
  return (
    <Routes>
      <Route exact path='/' element={<DevHome />} />
      <Route exact path='/resume'  element={<DevResumePage />} />
      <Route exact path='/project/:index' element={<DevProject />} />
      <Route path='/*' element={<DevHome />} />
    </Routes>
  )
};
