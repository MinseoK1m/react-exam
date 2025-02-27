import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { legacy_createStore as createStore } from "redux";
import reducers from "./ex070/reduxExam/reducers";

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById("root"));

const listner = () => {
  root.render(<App store={store} />);
};

store.subscribe(listner);
listner()
