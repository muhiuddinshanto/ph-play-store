// Router.jsx

import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import Apps from "../Pages/Apps/Apps";
import InstallApps from "../Pages/InstallApps/InstallApps";
import NotFound from "../Pages/NotFound/NotFound";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: '/apps/:id',
        element: <AppsDetails/>
      },
      {
        path: "/installedApps",
        Component: InstallApps
      }
    ],
    errorElement: <NotFound />
  }
]);