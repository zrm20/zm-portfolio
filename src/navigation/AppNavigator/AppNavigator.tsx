import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../../components/home";
import DevResumePage from "../../components/dev/DevResumePage";
import DevNavigator from "../DevNavigator/DevNavigator";

export default function AppNavigator(): JSX.Element {

  return (
    <Routes>
      <Route path="/audio" />
      <Route path="/dev/*" element={<DevNavigator />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
