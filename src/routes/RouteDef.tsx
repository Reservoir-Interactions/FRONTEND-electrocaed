import { Login } from "../pages/Login";
import { RouteObject } from "react-router-dom";
import { Project } from "../pages/Project";

export const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Project />,
  },
];
export default { publicRoutes };
