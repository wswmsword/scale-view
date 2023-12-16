import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";
import { init } from "scale-view";

// const sayHelloManyTimes = (times) =>
//   new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = sayHelloManyTimes(11).join("<br />");
// document.body.append(helloDiv);

init(750, 600);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Home />);