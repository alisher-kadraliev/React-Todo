import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import { IoCheckmarkDone } from "react-icons/io5";
import CreateFieldTodo from "./CreateFieldTodo";
function App() {
  const data = [
    {
      id: 1,
      title: "hell",
      isCompleted: false,
    },
    {
      id: 2,
      title: "hell2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "hell3",
      isCompleted: false,
    },
  ];
  const [todo, setTodos] = useState(data);
  const changeTodo = (id) => {
    const copy = [...todo];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodo = (id) =>
    setTodos((prevTodo) => prevTodo.filter((t) => t.id !== id));

  return (
    <>
      <div className="h-screen bg-gray-900 text-white p-5">
        <h1 className="text-2xl text-white mb-4 mx-auto">Todo</h1>
        <CreateFieldTodo setTodos={setTodos} />
        {todo.map((todos) => (
          <TodoItem
            key={todos.id}
            todos={todos}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default App;
