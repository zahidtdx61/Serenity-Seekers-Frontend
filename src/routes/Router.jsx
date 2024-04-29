import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoutes>
            <div>Add Tourists Spot</div>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoutes>
            <div>My List</div>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
