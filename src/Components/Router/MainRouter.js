import { createBrowserRouter } from "react-router-dom";
import Login from "../Authencations/Login";
import Signup from "../Authencations/Signup";
import DasbordLayout from "../Layout/DasbordLayout";
import MainLayout from "../Layout/MainLayout";
import Dasbord from "../Page/Dahbord/Dasbord";
import Home from "../Page/Home/Home";
import AllProducts from "../Sheaired/Service/AllProducts/AllProducts";
import Byu from "../Sheaired/Service/Buy/Byu";
import MainSarvice from "../Sheaired/Service/MainSarvice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/services", element: <MainSarvice /> },
      { path: "//services/:id", element: <AllProducts /> , loader: ({params})=>fetch(`http://localhost:8000/allProducts/${params.id}`) },
      { path: "/buy/:id", element: <Byu /> , loader:({params})=>fetch(`http://localhost:8000/buy/${params.id}`) },

    ],
  },
  {
    path: "/dasbord",
    element: <DasbordLayout />,
    children: [
      { path: "/dasbord", element: <Dasbord /> },
      { path: "/dasbord", element: <Dasbord /> },
    ],
  },
]);

export default router;