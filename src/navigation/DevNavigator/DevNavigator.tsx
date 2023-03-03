import React from "react";
import { Routes, Route } from "react-router-dom";
import { DevPage } from "../../components/dev";

export default function DevNavigator(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DevPage />} />
    </Routes>
  );
};
