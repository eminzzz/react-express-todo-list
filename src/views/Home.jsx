import React, { useState } from "react";

import { List, Item } from "../components/List";
import { v4 } from "uuid";

export const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const createTodo = () => {
    if (!todo) return alert("Type something");
    const todoObject = {
      id: v4(),
      title: todo,
      isComplete: false,
    };
    const updatedTodos = [...todos, todoObject];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setTodo("");
  };

  const deleteTodo = ({ id, title }) => {
    const confirmation = confirm(`Are you sure to delete ${title}?`);
    if (!confirmation) return;
    const updatedTodos = todos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return item;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10">
          <input
            onChange={(e) => setTodo(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? createTodo() : null)}
            value={todo}
            type="text"
            placeholder="What to do?"
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <button
            onClick={() => createTodo()}
            className="btn btn-primary w-100"
          >
            Create
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <List>
            {todos &&
              todos.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  toggleTodo={(id) => toggleTodo(id)}
                  deleteTodo={(item) => deleteTodo(item)}
                />
              ))}
          </List>
        </div>
      </div>
    </div>
  );
};
