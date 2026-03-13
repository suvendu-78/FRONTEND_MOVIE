import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLay from "../src/Applay/Applay.jsx";
import Home from "./Applay/Home.jsx";
import Signu from "../src/Applay/Addmin/Signup.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Applay/Addmin/login.jsx";
import FileUpload from "./Applay/Addmin/fileupload.jsx";
import Watch from "./Applay/Watch.jsx";
import MovieDetail from "./Applay/Movie.jsx";
const YOUR_GOOGLE_CLIENT_ID = `134163748388-9201s0b9nlreqonbl4pecu3vmgmlef4e.apps.googleusercontent.com`;
const Root = createBrowserRouter([
  {
    path: "/",
    element: <AppLay />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/fileUpload",
        element: <FileUpload />,
      },
      {
        path: "/watch/:id",
        element: <Watch />,
      },
      {
        path: "/MovieDetail/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={YOUR_GOOGLE_CLIENT_ID}>
    <StrictMode>
      <RouterProvider router={Root} />
    </StrictMode>
    ,
  </GoogleOAuthProvider>,
);
