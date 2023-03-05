import React from "react";
import { Route, Routes } from "react-router-dom";
import { DevPage } from "../../components/dev";

import { Home } from "../../components/home";

export default function AppNavigator(): JSX.Element {

  return (
    <Routes>
      <Route path="/audio/*" />
      <Route path="/dev/*" element={<DevPage />} />
      <Route path="/projects" />
      <Route path="/projects/:id" />
      <Route path="/experiences" />
      <Route path="/experiences/:id" />
      <Route path="/education" />
      <Route path="/education/:id" />
      <Route path="/skills" />
      <Route path="/skills/:id" />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
