import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, x, onUpdateTodo }) {
  // x=removeTodo
  const { id, content } = todo;

  const [editable, setEdiTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    x(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEdiTable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ width: "380px" }}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <TiDelete className="todo-icons" onClick={removeTodo} />

        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEdiTable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
