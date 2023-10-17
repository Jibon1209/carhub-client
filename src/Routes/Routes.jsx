import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layout/Root";
import NotFound from "../Components/NotFound";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import SignIn from "../Components/Banner/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <NotFound/>,
      children:[
        {
            path: '/',
            element: <Home/>,
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
        // {
        //     path: '/service/:id',
        //     element: <PrivetRoute><ServiceDetails/></PrivetRoute>,
        //     loader: ()=> fetch('/services.json'),
        // },
        // {
        //     path: '/venue/:id',
        //     element: <PrivetRoute><VenueDetails/></PrivetRoute>,
        //     loader: ()=> fetch('/venue.json'),
        // },
        // {
        //     path: '/photoGrapDetails/:id',
        //     element: <PrivetRoute><PhotoGrapDetails/></PrivetRoute>,
        //     loader: ()=> fetch('/photography.json'),
        // },
        // {
        //     path: '/aboutus',
        //     element: <AboutUs/>
        // },
        
      ]
    },
  ]);
  export default router;