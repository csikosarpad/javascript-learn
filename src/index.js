import "./style.scss";
import React, { useState, Component } from "react";
import { render } from "react-dom";

const getUserModule = () => import("./common/usersApi");

function App() {
  const [state, setState] = useState("click me");
  return <button onClick={() => setState("Barni")}>{state}</button>;
}

const btn = document.getElementById("btn");
const responseArea = document.getElementById("response");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(
      (json) => responseArea.innerHTML = JSON.stringify(json));
  });
});

/*
class ExampleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [
                { title: "React Redux Tutorial for Beginners", id: 1 },
                { title: "TypeScript tutorial for beginners", id: 2 }
            ],
        }
    }
    render() {
        const { articles } = this.state;
        return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
    }    
}*/

render(<App />, document.getElementById("root"));
