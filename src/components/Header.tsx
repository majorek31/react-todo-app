import { useTodos } from "../contexts/TodoContext";
import { Todo } from "../lib/Types";

function countCompletedTasks(todos: Array<Todo>): number {
  let count = 0;
  for (const todo of todos) {
    if (todo.completed) count++;
  }
  return count;
}
export default function Header() {
  const { state } = useTodos();
  const { todos } = state;
  const completedTasks = countCompletedTasks(todos);
  return (
    <header className="bg-gray-100 p-4 flex items-center justify-between">
      <p className="text-2xl">
        <span className="font-bold text-green-500">{completedTasks}</span>/
        {todos.length} Tasks ({todos.length - completedTasks} tasks left)
      </p>
      <div className="flex items-center justify-between">
        <div className="w-5 h-5 bg-gray-400 rounded-xl"></div>
        <div className="w-5 h-5 bg-gray-400 rounded-xl m-1"></div>
        <div className="w-5 h-5 bg-red-500 rounded-xl"></div>
      </div>
    </header>
  );
}
