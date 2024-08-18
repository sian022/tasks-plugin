import { render } from "preact";
import Widget from "./components/Widget";
import "./styles/main.scss";

if (!document.getElementById("widget-root")) {
  const container = document.createElement("div");
  container.id = "widget-root";
  document.body.appendChild(container);

  // Render your Preact app into the container
  render(<Widget />, container);
}
