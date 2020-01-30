import React from "react";

function ListItem(props) {
  const { name, done } = props.todo;

  return (
    <li style={{ textDecoration: done ? "line-through" : "" }}>
      {name}
      {!done ? (
        <button style={{ marginLeft: 30 }} onClick={props.complete}>
          Complete
        </button>
      ) : (
        ""
      )}
      <button style={{ marginLeft: 30, margin: 10 }} onClick={props.remove}>
        Remove
      </button>
    </li>
  );
}

export default ListItem;
