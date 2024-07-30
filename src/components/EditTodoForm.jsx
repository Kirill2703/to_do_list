import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
      if (value.trim()) {
        
          editTodo(value, task.id);
          
      setValue("");
    }
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Update task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
