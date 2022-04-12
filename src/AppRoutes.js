import { useRoutes } from "react-router";
import App from "./App";
import UserDetails from "./users/UserDetails";

function AppRoutes() {
  return useRoutes([
    { path: "/", element: <App /> },
    { path: "/users", element: <App /> },
    { path: "/users/:id", element: <UserDetails /> },
  ]);
}

export default AppRoutes;
