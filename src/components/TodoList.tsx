import { useTodos } from "../contexts/TodoContext";
import TodoEntry from "./TodoEntry";

type TodoListProps = {};

export default function TodoList(props: TodoListProps) {
    const { state } = useTodos();
    const { todos } = state;
    return (
        <div className="lg:w-2/3 sm:w-full lg:h-full flex flex-col pb-8 overflow-y-scroll custom-scrollbar">
            {
                todos.map(todo => <TodoEntry key={todo.id} todo={todo}/>)
            }
        </div>
    );
}