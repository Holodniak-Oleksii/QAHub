import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import { Board, Projects, Report } from "./modules";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/board/:id" element={<Board />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
