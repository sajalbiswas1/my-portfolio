import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../component/ErrorElement/ErrorElement";
import Home from "../component/Page/Home/Home";
// import Projects from "../component/Page/Home/Projects";

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
        // {
        //     path:'project',
        //     element: <Projects></Projects>
        // }
      ]
    },
    // {
    //     path:'project', Component=
        
    // }
  ]);
export default router;