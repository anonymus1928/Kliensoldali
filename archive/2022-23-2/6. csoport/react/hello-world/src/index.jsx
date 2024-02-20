import React from "react";
import { createRoot } from "react-dom/client";
import { Hello } from "./Hello";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Hello name="General Kenobi" count={3}>
        <p>További szöveg...</p>
        <p>További szöveg...</p>
    </Hello>
  </React.StrictMode>
);
