import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AudioPage } from "../../components/audio";
import { ContactPage } from "../../components/contact";
import { DevPage } from "../../components/dev";
import EducationPage from "../../components/education/EducationPage/EducationPage";
import { ExperienceDetailsPage, ExperiencePage } from "../../components/experience";

import { Home } from "../../components/home";
import { ProjectDetailsPage, ProjectsPage } from "../../components/projects";
import { ResumePage } from "../../components/resume";
import { SkillDetailsPage, SkillsPage } from "../../components/skills";
import { useAnalytics, useScrollToSection } from "../../hooks";

export default function AppNavigator(): JSX.Element {
  const location = useLocation();
  useScrollToSection();
  useAnalytics();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/dev" element={<DevPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />ß
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:id" element={<ExperienceDetailsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/skills/:id" element={<SkillDetailsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};
