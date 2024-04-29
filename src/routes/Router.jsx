import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MySpotList from "../pages/MySpotList";
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
        element: <AllTouristSpot />,
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoutes>
            <AddTouristSpot />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoutes>
            <MySpotList />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
