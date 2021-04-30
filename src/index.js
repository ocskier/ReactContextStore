import React from "react";
import ReactDOM from "react-dom";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import { GlobalProvider } from "./utils/GlobalState";
import "./styles.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h2 className="is-size-4">
          We'll use the React Context API to pass and receive data in any
          component.
        </h2>
        <div className="container">
          <UserForm />

          <h2 className="is-size-4">
            Display User Info Here{" "}
            <span role="img" aria-label="point-down-label">
              👇
            </span>
          </h2>
          <p>
            These two children components will receive data. These could be
            nested components.
          </p>
          <Name />
          <Location />
        </div>
      </div>
    </GlobalProvider>
  );
}

// Wrap parent component with context provider
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
