import React from "react";

export const TodoList = ({ todo, handleDelete, handleChange }) => {
  return (
    <ul>
      {todo.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.text}</li>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              删除
            </button>
            <button
              onClick={() => {
                handleChange(item.id);
              }}
            >
              修改
            </button>
          </div>
        );
      })}
    </ul>
  );
};
