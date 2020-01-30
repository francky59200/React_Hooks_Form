import React, { useState, useEffect, Fragment } from "react";

import Form from "./components/Form";
import ListItem from "./components/ListItems";
import "./styles.css";

function App() {
  const list = [
    { name: "glass", done: false },
    { name: "bed", done: false },
    { name: "kitchen", done: false },
    { name: "saloon", done: true }
  ];

  const [todos, setTodos] = useState(list);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let count = todos.length;

    document.title = `${count} todo${count > 1 ? "s" : ""} List`;
  });

  const _handleChange = e => {
    setInputValue(e.target.value);
  };

  const _handleSubmit = e => {
    e.preventDefault();
    const newArray = [...todos];
    newArray.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArray);
    setInputValue("");
  };

  const _handleClick = (type, index) => {
    const newArray = todos.slice();
    if (type === "remove") {
      newArray.splice(index, 1);
    } else if (type === "complete") {
      newArray[index].done = true;
    }
    return setTodos(newArray);
  };

  return (
    <Fragment>
      <div />
      <h2>My todo List to the Home</h2>
      <Form
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={_handleChange}
      />
      <div>
        <ul>
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              todo={todo}
              remove={() => _handleClick("remove", index)}
              complete={() => _handleClick("complete", index)}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
