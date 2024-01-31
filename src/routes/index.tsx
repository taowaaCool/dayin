import { Navigate, RouteObject } from "react-router-dom";
import CustomerPage from "../pages/system/customer";
import DashboardPage from "../pages/dashboard";

export const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/dashboard" /> },
  {
    path: "/dashboard",
    children: [{ path: "/dashboard", element: <DashboardPage /> }],
  },
  { path: "/customer", element: <CustomerPage /> },
];
