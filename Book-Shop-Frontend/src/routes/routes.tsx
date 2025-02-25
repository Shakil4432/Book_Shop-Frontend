import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { routeGenerator } from "../utils/routesGenerator";
import { userCommonPaths, userDashboardPath } from "./userRoutes";
import Dashboard from "../components/layouts/Dashboard";
import { adminPaths } from "./adminRoutes";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import BookDetails from "../pages/BookDetails";
import UpdateBook from "../pages/UpdateBook";

import CartPage from "../pages/CartPage";
import VerifyOrder from "../pages/VerifyOrder";

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
    path: "/book/:id",
    element: <BookDetails></BookDetails>,
  },
  {
    path: "/order/verify",
    element: <VerifyOrder></VerifyOrder>,
  },
  {
    path: "/update-book/:id",
    element: (
      <ProtectedRoute>
        <UpdateBook></UpdateBook>
      </ProtectedRoute>
    ),
  },

  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <CartPage></CartPage>
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
