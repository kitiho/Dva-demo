import React, { useRef } from "react";
import { connect } from "dva";
import { TodoList } from "../components/TodoList";
export const TodoPage = connect(({ todo }) => ({ todo }))(
  ({ dispatch, todo }) => {
    const inputEl = useRef(null);
    const changeEl = useRef(null);
    const searchEl = useRef(null);
    const handleSearch = () => {
      const query = searchEl.current.value;
      let has = false;
      for (let i = 0; i < todo.length; i++) {
        if (todo[i].text.indexOf(query) !== -1) {
          has = true;
        }
      }
      if (has) {
        alert("找到了");
      } else {
        alert("没找到");
      }
    };
    const handleAdd = () => {
      dispatch({
        type: "todo/add",
        payload: { text: inputEl.current.value, id: Date.now() },
      });
    };
    const handleChange = (id) => {
      dispatch({
        type: "todo/change",
        payload: { id, text: changeEl.current.value },
      });
    };
    const handleDelete = (id) => {
      dispatch({ type: "todo/delete", payload: id });
    };
    return (
      <div>
        <input ref={inputEl} type="text" />
        <button onClick={handleAdd}>添加</button>
        <TodoList
          todo={todo}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
        <div>
          <span>修改为：</span>
          <input ref={changeEl} type="text" />
        </div>
        <div>
          <span>查找</span>
          <input ref={searchEl} type="text" />
          <button onClick={handleSearch}>查找</button>
        </div>
      </div>
    );
  }
);
