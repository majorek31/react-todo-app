import { useTodos } from "../contexts/TodoContext";
import { Todo } from "../lib/Types";

type HeaderProps = {};
function countCompletedTasks(todos: Array<Todo>): number {
  let count = 0;
  for (const todo of todos) {
    if (todo.completed) count++;
  }
  return count;
}
export default function Header(props: HeaderProps) {
  const { state } = useTodos();
  const { todos } = state;
  return (
    <header className="bg-gray-100 p-4 flex items-center justify-between">
      <p className="text-2xl">
        {countCompletedTasks(todos)}/{todos.length} Tasks
      </p>
      <div className="flex items-center justify-between">
        <div className="w-5 h-5 bg-gray-400 rounded-xl"></div>
        <div className="w-5 h-5 bg-gray-400 rounded-xl m-1"></div>
        <div className="w-5 h-5 bg-red-500 rounded-xl"></div>
      </div>
    </header>
  );
}
