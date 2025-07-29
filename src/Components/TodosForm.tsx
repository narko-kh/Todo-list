import React, { useState } from "react";

type TodosFormTypes = {
  addTodo: (title: string) => boolean;
};

export default function TodosForm({ addTodo }: TodosFormTypes) {
  const [value, setValue] = useState<string>("");

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={addTodoHandler}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
