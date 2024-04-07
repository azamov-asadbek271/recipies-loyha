// import {toast} from "react"

// const notify = () =>
// {
//   toast("Here is your toast.");
// } ;
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./page/Home";
import Create from "./page/Create";
import SingleRecipe from "./page/SingleRecipe";





function App() {
 const routes = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout />,
     children: [
       {
         index: true,
         element: <Home />,
       },
       {
         path: "/create",
         element: <Create />,
       },
       {
         path: "/singleREcipe/:id",
         element: <SingleRecipe/>,
       },
     ],
   },
 ]);
  return <RouterProvider router={routes}/>;
}

export default App
