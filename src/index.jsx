import { h, render } from "preact";
import Widget from "./components/Widget";
import "./styles/main.scss";

// Create a container for your widget if it doesn't already exist
const initializeWidget = () => {
  if (!document.getElementById("widget-root")) {
    const container = document.createElement("div");
    container.id = "widget-root";
    document.body.appendChild(container);

    // Render your Preact app into the container
    render(<Widget />, container);
  }
};

function removeWidget() {
  const widget = document.getElementById("widget-root");
  if (widget) {
    widget.remove();
  }
}

// Ensure widget is initialized on load
if (document.readyState === "complete") {
  initializeWidget();
} else {
  window.addEventListener("load", initializeWidget);
}

// Export functions to global scope for injection
window.initializeWidget = initializeWidget;
window.removeWidget = removeWidget;
