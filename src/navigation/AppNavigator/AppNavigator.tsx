import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AudioPage } from "../../components/audio";
import { DevPage } from "../../components/dev";
import DevResumePage from "../../components/dev/DevResumePage";

import { Home } from "../../components/home";
import { ProjectDetailsPage, ProjectsPage } from "../../components/projects";
import { useScrollToSection } from "../../hooks";

export default function AppNavigator(): JSX.Element {
    useScrollToSection();

  return (
    <Routes>
      <Route path="/audio" element={<AudioPage />}/>
      <Route path="/dev" element={<DevPage />} />
      <Route path="/resume" element={<DevResumePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      {/* <Route path="/experiences" />
      <Route path="/experiences/:id" />
      <Route path="/education" />
      <Route path="/education/:id" />
      <Route path="/skills" />
      <Route path="/skills/:id" /> */}
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
