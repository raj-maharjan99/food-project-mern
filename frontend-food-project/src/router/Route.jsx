import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <div>About page</div> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
