import { createBrowserRouter } from "react-router-dom";
import Login from "../Authencations/Login";
import Signup from "../Authencations/Signup";
import DasbordLayout from "../Layout/DasbordLayout";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Page/Blog/Blog";
import AddaProducts from "../Page/Dahbord/AddaProducts/AddaProducts";
import AllBuyers from "../Page/Dahbord/AllBuyers/AllBuyers";
import AllSellers from "../Page/Dahbord/AllSellers/AllSellers";
// import Dasbord from "../Page/Dahbord/Dasbord";
import MyBuyers from "../Page/Dahbord/MyBuyers/MyBuyers";
import Myorders from "../Page/Dahbord/Myorders/Myorders";
import MyProducts from "../Page/Dahbord/MyProducts/MyProducts";
import ReportedItems from "../Page/Dahbord/ReportedItems/ReportedItems";
import Home from "../Page/Home/Home";
import Error from "../Sheaired/Error/Error";
import AllProducts from "../Sheaired/Service/AllProducts/AllProducts";
import Byu from "../Sheaired/Service/Buy/Byu";
import MainSarvice from "../Sheaired/Service/MainSarvice";
import AdmineRoute from "./AdmineRoute";
import MyselerRout from "./MyselerRout";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/services", element: <MainSarvice /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/services/:id",
        element: <AllProducts />,
        loader: ({ params }) =>
          fetch(`https://mobil-sarver.vercel.app/allProducts/${params.id}`),
      },
      {
        path: "/Book/:id",
        element: <Byu />,
        loader: ({ params }) =>
          fetch(`https://mobil-sarver.vercel.app/books/${params.id}`),
      },
    ],
  },
  {
    path: "/dasbord",
    element: (
      <PrivateRout>
        <DasbordLayout />
      </PrivateRout>
    ),
    children: [
      { path: "/dasbord/Myorders", element: <Myorders /> },

      {
        path: "/dasbord/AddAproduct",
        element: (
          <MyselerRout>
            <AddaProducts />
          </MyselerRout>
        ),
      },
      {
        path: "/dasbord/MyProducts",
        element: (
          <MyselerRout>
            <MyProducts />
          </MyselerRout>
        ),
      },
      {
        path: "/dasbord/Mybuyers",
        element: (
          <MyselerRout>
            <MyBuyers />
          </MyselerRout>
        ),
      },

      {
        path: "/dasbord/AllSellers",
        element: (
          <AdmineRoute>
            <AllSellers />
          </AdmineRoute>
        ),
      },
      {
        path: "/dasbord/AllBuyers",
        element: (
          <AdmineRoute>
            <AllBuyers />
          </AdmineRoute>
        ),
      },
      {
        path: "/dasbord/ReportedItems",
        element: (
          <AdmineRoute>
            <ReportedItems />
          </AdmineRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Error /> },
]);

export default router;