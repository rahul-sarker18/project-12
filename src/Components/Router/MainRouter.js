import { createBrowserRouter } from "react-router-dom";
import Login from "../Authencations/Login";
import Signup from "../Authencations/Signup";
import DasbordLayout from "../Layout/DasbordLayout";
import MainLayout from "../Layout/MainLayout";
import Dasbord from "../Page/Dahbord/Dasbord";
import Home from "../Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ],
  },
  {
    path: "/dasbord",
    element: <DasbordLayout />,
    children: [{ path: "/dasbord", element: <Dasbord /> }],
  },

]);

export default router;