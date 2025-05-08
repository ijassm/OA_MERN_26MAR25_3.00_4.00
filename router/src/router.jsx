import { createBrowserRouter, Link } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Welcome to Home page</h1>
        <Link to="/about">About</Link>
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <h1>Welcome to Home page</h1>
        <Link to="/about">About</Link>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <h1>Welcome to About page</h1>
        <Link to="/home">Home</Link>
      </>
    ),
  },
]);
