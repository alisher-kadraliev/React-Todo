import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const CreateFieldTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: uuidv4(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="mb-4 bg-gray-800 shadow-xl rounded-lg p-3  p-5 ">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent border-b-2 border-transparent w-full focus:outline-none focus:border-pink-400 focus:ring-none focus:ring-none"
        placeholder="Press Enter To Create Todo"
      />
    </div>
  );
};
export default CreateFieldTodo;
