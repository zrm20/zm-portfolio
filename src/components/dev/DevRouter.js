import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DevHome from './DevHome';
import DevResume from './DevResume';

export default function DevRouter() {
  return (
    <Routes>
      <Route exact path='/' element={<DevHome />} />
      <Route exact path='/resume'  element={<DevResume />} />
      <Route exact path='/project/:index' element={<div>Hello</div>} />
      <Route path='/*' element={<DevHome />} />
    </Routes>
  )
};
