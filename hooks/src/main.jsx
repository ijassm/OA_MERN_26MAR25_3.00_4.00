import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UseEffect } from "./pages";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UseEffect />
  // </StrictMode>
);
