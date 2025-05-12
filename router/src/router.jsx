import { createBrowserRouter, Link, Navigate } from "react-router";
import { About, Contact, Home } from "./pages";
import { VegCardList } from "./components/VegCardList";
import { NonVegCardList } from "./components/NonVegCardList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    Component: Home,
    children: [
      {
        path: "vegetarian",
        Component: VegCardList,
      },
      {
        path: "nonVegetarian",
        Component: NonVegCardList,
      },
    ],
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/contact",
    element: Contact,
  },
]);
