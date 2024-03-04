import { FaCheck } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";

const TodoItem = ({ todos, changeTodo, removeTodo }) => {
  return (
    <div className="w-full flex justify-between gap-4 mb-3 bg-gray-800 shadow-xl rounded-lg p-3 ">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => changeTodo(todos.id)}
          className={`border-2 flex  justify-center items-center  border-pink-500 ${
            todos.isCompleted ? "bg-pink-500" : ""
          } rounded-lg w-6 h-6 `}
        >
          {todos.isCompleted && (
            <FaCheck size={24} className="text-gray-900 " />
          )}
        </button>
        <div className={`${todos.isCompleted ? "line-through" : ""}`}>
          {todos.title}
        </div>
      </div>
      <button className="" onClick={() => removeTodo(todos.id)}>
        <TbTrashX size={24} className="text-gray-600 hover:text-gray-400" />
      </button>
    </div>
  );
};

export default TodoItem;
