import { createBrowserRouter } from "react-router-dom";
import Login from "../Authencations/Login";
import Signup from "../Authencations/Signup";
import DasbordLayout from "../Layout/DasbordLayout";
import MainLayout from "../Layout/MainLayout";
import AddaProducts from "../Page/Dahbord/AddaProducts/AddaProducts";
import AllBuyers from "../Page/Dahbord/AllBuyers/AllBuyers";
import AllSellers from "../Page/Dahbord/AllSellers/AllSellers";
// import Dasbord from "../Page/Dahbord/Dasbord";
import MyBuyers from "../Page/Dahbord/MyBuyers/MyBuyers";
import Myorders from "../Page/Dahbord/Myorders/Myorders";
import MyProducts from "../Page/Dahbord/MyProducts/MyProducts";
import ReportedItems from "../Page/Dahbord/ReportedItems/ReportedItems";
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
      {
        path: "//services/:id",
        element: <AllProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/allProducts/${params.id}`),
      },
      {
        path: "/buy/:id",
        element: <Byu />,
        loader: ({ params }) => fetch(`http://localhost:8000/buy/${params.id}`),
      },
    ],
  },
  {
    path: "/dasbord",
    element: <DasbordLayout />,
    children: [
      { path: "/dasbord/Myorders", element: <Myorders /> },
      { path: "/dasbord/AddAproduct", element: <AddaProducts /> },
      { path: "/dasbord/MyProducts", element: <MyProducts /> },
      { path: "/dasbord/Mybuyers", element: <MyBuyers /> },
      { path: "/dasbord/AllSellers", element: <AllSellers /> },
      { path: "/dasbord/AllBuyers", element: <AllBuyers /> },
      { path: "/dasbord/ReportedItems", element: <ReportedItems /> },
    ],
  },
]);

export default router;