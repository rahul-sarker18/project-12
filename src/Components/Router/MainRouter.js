import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {path:'/',  element:<MainLayout/> , children:[
        {path:'/', }
    ]}
])

export default router;