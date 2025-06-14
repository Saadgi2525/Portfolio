import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import publicRoutes from "./configs/routeconfig"; // ✅ Correct import

function RoutesWrapper() {
  return useRoutes(
    publicRoutes.map(({ path, component }) => ({
      path,
      element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(component)}</Suspense>,
    }))
  );
}

function App() {
  return (
    <Router>
      <RoutesWrapper />
    </Router>
  );
}

export default App;
