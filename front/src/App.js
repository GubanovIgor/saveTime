import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <input className="search" placeholder="поиск" type="text" />
        <div className="tips"></div>
      </div>
    </Provider>
  );
}

export default App;
