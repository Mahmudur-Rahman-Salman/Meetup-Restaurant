import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/", 
            element: <Home></Home>, 
        }, 
        {
          path:"/menu", 
          element: <Menu></Menu>, 
        }
    ]
  },
]);
