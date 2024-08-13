import { render } from "preact";
import "./styles/main.scss";
import Widget from "./components/Widget";

export function App() {
  return <Widget />;
}

render(<App />, document.getElementById("app"));
