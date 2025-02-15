import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { routeGenerator } from "../utils/routesGenerator";
import { userCommonPaths, userDashboardPath } from "./userRoutes";
import Dashboard from "../components/layouts/Dashboard";
import { adminPaths } from "./adminRoutes";
import ProtectedRoute from "../components/layouts/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: routeGenerator(userCommonPaths),
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: routeGenerator(userDashboardPath),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
