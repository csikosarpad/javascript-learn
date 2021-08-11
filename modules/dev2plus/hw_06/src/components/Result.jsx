import React from "react";
import NewItem from "./AddNewMenu";

export default function Result({ name }) {
  return (
    <div>
      <h3>{name}</h3>
      <NewItem />
    </div>
  );
}
