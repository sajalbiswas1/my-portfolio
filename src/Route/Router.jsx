import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../component/ErrorElement/ErrorElement";
import Home from "../component/Page/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        }
      ]
    },
  ]);
export default router;