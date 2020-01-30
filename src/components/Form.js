import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder="Write a todo!"
      />
      <button type="submit" style={{ marginLeft: 5 }}>
        Add a todo
      </button>
    </form>
  );
}
