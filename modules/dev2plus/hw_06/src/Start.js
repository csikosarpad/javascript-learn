import React from "react";
import menuItems from "./data/menuItems";
import MenuList from "./components/MenuList";

//import MenuDetails from "./components/MenuDetails";

import Result from "./components/Result";
import AddNewMenu from "./components/AddNewMenu";
import OpenPage from "./components/OpenPage";

import { store } from "./models/store";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";

export default function ParamsExample() {
  const query = new URLSearchParams(window.location.search);
  return (
    <Provider store={store}>
      <Router>
        <MenuList menuItems={menuItems} />
        <div className="container">
          {query.get("menu") && <Result name={query.get("menu")} />}
          {query.get("item") && <AddNewMenu name={query.get("item")} />}
          {!query.get("menu") && !query.get("item") && <OpenPage />}
        </div>
      </Router>
    </Provider>
  );
}
