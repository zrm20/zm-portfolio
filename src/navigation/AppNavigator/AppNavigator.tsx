import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../../components/home";

export default function AppNavigator(): JSX.Element {

  return (
    <Routes>
      <Route path="/audio" />
      <Route path="/dev" />
      <Route path="/resume" />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
