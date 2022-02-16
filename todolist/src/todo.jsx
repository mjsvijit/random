import React, { useState } from "react";

export const Todo = () => {
  const [todos, settodos] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <input type="Number" placeholder="Enter ID" />
        <input
          type="text"
          placeholder="Enter Title"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <input type="Number" placeholder="Enter Cost" />
        <input type="text" placeholder="Enter Category" />
        <button
          onClick={() => {
            settodos([...todos, value]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <input type="checkbox" />
                <p>{todo}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
