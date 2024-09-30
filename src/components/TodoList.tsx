import { useTodos } from "../contexts/TodoContext";
import TodoEntry from "./TodoEntry";

export default function TodoList() {
  const { state } = useTodos();
  const { todos } = state;
  return (
    <div className="lg:w-2/3 sm:w-full lg:h-full flex flex-col pb-8 overflow-y-scroll custom-scrollbar">
      {todos.length ? (
        todos.map((todo) => <TodoEntry key={todo.id} todo={todo} />)
      ) : (
        <h1 className="text-center py-10 text-xl">You have no tasks left</h1>
      )}
    </div>
  );
}
