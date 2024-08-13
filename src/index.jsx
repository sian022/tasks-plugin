// src/index.jsx
import { h, render } from "preact";
import Widget from "./components/Widget";
import "./styles/main.scss";

// Create a container for your widget
const container = document.createElement("div");
container.id = "widget-root";
container.style.position = "fixed";
container.style.bottom = "20px";
container.style.right = "20px";
container.style.zIndex = "1000";
document.body.appendChild(container);

// Render your Preact app into the container
render(<Widget />, document.getElementById("widget-root"));

// import { render } from "preact";
// import "./styles/main.scss";
// import Widget from "./components/Widget";

// export function App() {
//   return <Widget />;
// }

// render(<App />, document.getElementById("app"));
