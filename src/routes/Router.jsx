import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/log-in",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-tourist-spot",
        element: <div>All Tourists Spot</div>,
      },
      {
        path: "/add-tourist-spot",
        element: <div>Add Tourists Spot</div>,
      },
      {
        path: "/my-list",
        element: <div>My List</div>,
      },
    ],
  },
]);

export default router;
