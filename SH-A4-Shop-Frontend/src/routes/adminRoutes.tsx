import { ReactNode } from "react";

import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";

import Users from "../pages/admin/Users";
import CreateProduct from "../pages/admin/CreateProduct";

type TAdminPath = {
  key: string;
  label: ReactNode;
  children?: TAdminPath[];
};

export const adminPaths = [
  {
    name: "Order",
    path: "orders",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Products Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element: <CreateProduct></CreateProduct>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Users",
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
];

export const adminNavbarItems = adminPaths.reduce((acc: TAdminPath[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/dashboard/${item.path}`}>{item.name}</NavLink>,
    });
  }

  return acc;
}, []);
