import { ReactNode } from "react";
import AboutUs from "../pages/AboutUs";

import { NavLink } from "react-router-dom";
import Home from "../components/Home/Home";
import OrderHistory from "../pages/user/OrderHistory";
import AccountDetails from "../pages/user/AccountDetails";
import Books from "../pages/Books";
import CheakoutPage from "../pages/user/CheakoutPage";

type TNavbarItem = {
  key: string;
  label: ReactNode;
  children?: TNavbarItem[];
};

export const userCommonPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home></Home>,
  },
  {
    name: "Book",
    path: "books",
    element: <Books />,
  },
  {
    name: "About Us",
    path: "about-us",
    element: <AboutUs />,
  },
];

export const userDashboardPath = [
  {
    name: "Order History",
    path: "order-history",
    element: <OrderHistory></OrderHistory>,
  },
  {
    name: "Checkout",
    path: "checkout",
    element: <CheakoutPage></CheakoutPage>,
  },
  {
    name: "Account Details ",
    path: "account-details",
    element: <AccountDetails></AccountDetails>,
  },
];

export const userDashboardItems = userDashboardPath.reduce(
  (acc: TNavbarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    return acc;
  },
  []
);

export const userNavbarItems = userCommonPaths.reduce(
  (acc: TNavbarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    return acc;
  },
  []
);
