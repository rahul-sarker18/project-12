import { createBrowserRouter } from "react-router-dom";
import DasbordLayout from "../Layout/DasbordLayout";
import MainLayout from "../Layout/MainLayout";
import Dasbord from "../Page/Dahbord/Dasbord";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/dasbord",
    element: <DasbordLayout />,
    children: [{ path: "/dasbord", element: <Dasbord /> }],
  },

]);

export default router;