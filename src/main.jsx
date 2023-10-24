import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Root from "./Components/Root";
import Error from "./Components/Error";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddElement from "./Components/AddElement.jsx";
import PrivateRoute from "./Components/PrivateRoute";
import Details from "./Components/Details";
import Cars from "./Components/Cars";
import UpdateElement from "./Components/UpdateElement";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import AuthProvider from "./Providers/AuthProvider";
import MyCarts from "./Components/MyCarts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //loader: () => fetch("https://brand-store-server-i1vxuc10a-tahseen-hossains-projects.vercel.app/user"),
      },
      {
        path: "/Cars/:brand",
        element: (
          <PrivateRoute>
            <Cars></Cars>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-store-server-i1vxuc10a-tahseen-hossains-projects.vercel.app/elements"),
      },
      {
        path: "/detail/:model",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brand-store-server-i1vxuc10a-tahseen-hossains-projects.vercel.app/elements"),
      },
      {
        path: "/addElement",
        element: (
          <PrivateRoute>
            <AddElement></AddElement>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateElement></UpdateElement>,
        loader: ({ params }) =>
          fetch(`https://brand-store-server-i1vxuc10a-tahseen-hossains-projects.vercel.app/elements/${params.id}`),
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/MyCarts",
        element: (
          <PrivateRoute>
            <MyCarts></MyCarts>
          </PrivateRoute>
        ),
        loader: () => 
          fetch(`https://brand-store-server-i1vxuc10a-tahseen-hossains-projects.vercel.app/user`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
