import React from "react";
import "./css/index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("main_root"));

root.render(<App />);
