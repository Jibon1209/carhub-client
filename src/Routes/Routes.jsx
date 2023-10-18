import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import NotFound from "../Components/NotFound";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import { BASE_URL } from "../baseurl";
import BrandDetails from "../Components/Brands/BrandDetails";
import UpdateProduct from "../Components/AddProduct/UpdateProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <NotFound/>,
      children:[
        {
            path: '/',
            element: <Home/>,
            loader: ()=> fetch(`${BASE_URL}/products`)
        },
        {
            path: '/addproduct',
            element: <PrivetRoute><AddProduct/></PrivetRoute>,
        },
        {
            path: '/mycart',
            element: <PrivetRoute><MyCart/></PrivetRoute>,
        },
        {
          path: '/signin',
          element: <SignIn/>,
      },
      {
          path: '/signup',
          element: <SignUp/>,
      },
      {
          path: '/brandDetails/:id',
          element: <BrandDetails></BrandDetails>,
          loader: ({ params })=> fetch(`${BASE_URL}/products/${params.id}`)
      },
      {
          path: '/updateproduct/:id',
          element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
          loader: ({ params }) => fetch(`${BASE_URL}/products/${params.id}`)
      },
        
        
      ]
    },
  ]);
  export default router;