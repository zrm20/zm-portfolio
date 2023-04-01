import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AudioPage } from "../../components/audio";
import { ContactPage } from "../../components/contact";
import { DevPage } from "../../components/dev";
import DevResumePage from "../../components/dev/DevResumePage";
import EducationPage from "../../components/education/EducationPage/EducationPage";
import { ExperienceDetailsPage, ExperiencePage } from "../../components/experience";

import { Home } from "../../components/home";
import { ProjectDetailsPage, ProjectsPage } from "../../components/projects";
import { ResumePage } from "../../components/resume";
import { SkillDetailsPage, SkillsPage } from "../../components/skills";
import { useAnalytics, useScrollToSection } from "../../hooks";

export default function AppNavigator(): JSX.Element {
    useScrollToSection();
    useAnalytics();

  return (
    <Routes>
      <Route path="/audio" element={<AudioPage />}/>
      <Route path="/dev" element={<DevPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/experience" element={<ExperiencePage />}/>
      <Route path="/experience/:id" element={<ExperienceDetailsPage />}/>
      <Route path="/education" element={<EducationPage />}/>
      <Route path="/skills" element={<SkillsPage />}/>
      <Route path="/skills/:id" element={<SkillDetailsPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
