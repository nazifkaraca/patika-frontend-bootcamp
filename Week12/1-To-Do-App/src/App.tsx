import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Todo } from "./types";
import "./App.css";

const initialTodos: Todo[] = [
  { text: "Taste JavaScript", done: true },
  { text: "Code furiously", done: true },
  { text: "Promote Mavo", done: false },
  { text: "Give talks", done: false },
  { text: "Write tutorials", done: true },
  { text: "Have a life!", done: false },
];

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : initialTodos;
  });

  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed) return;
    setTodos([...todos, { text: trimmed, done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index: number) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleAll = () => {
    const allDone = todos.every((t) => t.done);
    setTodos(todos.map((t) => ({ ...t, done: !allDone })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.done));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  const itemsLeft = todos.filter((t) => !t.done).length;

  return (
    <div className="app">
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Add</button>
      </form>

      {todos.length > 0 && (
        <>
          <button onClick={toggleAll}>
            {itemsLeft === 0 ? "Uncheck All" : "Check All"}
          </button>

          <ul>
            {filteredTodos.map((todo, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(index)}
                  />
                  <span
                    style={{
                      textDecoration: todo.done ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                </label>
                <button onClick={() => deleteTodo(index)}>x</button>
              </li>
            ))}
          </ul>

          <div>
            <span>{itemsLeft} items left</span>
            <div>
              <button onClick={() => setFilter("all")}>All</button>
              <button onClick={() => setFilter("active")}>Active</button>
              <button onClick={() => setFilter("completed")}>Completed</button>
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
