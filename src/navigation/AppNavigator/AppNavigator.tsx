import React from "react";
import { Route, Routes } from "react-router-dom";
import { DevPage } from "../../components/dev";
import DevResumePage from "../../components/dev/DevResumePage";

import { Home } from "../../components/home";
import { useScrollToSection } from "../../hooks";

export default function AppNavigator(): JSX.Element {
    useScrollToSection();

  return (
    <Routes>
      <Route path="/audio/*" />
      <Route path="/dev/*" element={<DevPage />} />
      <Route path="/resume" element={<DevResumePage />} />
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
