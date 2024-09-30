import { Todo } from "../lib/Types";
import TodoEntry from "./TodoEntry";

type TodoListProps = {
    todos: Array<Todo>;
    onTaskDelete: (todo: Todo) => void;
};

export default function TodoList(props: TodoListProps) {
    return (
        <div className="lg:w-2/3 sm:w-full lg:h-full flex flex-col pb-8 overflow-y-scroll custom-scrollbar">
            {
                props.todos.map(todo => <TodoEntry todo={todo} onTaskDelete={props.onTaskDelete}/>)
            }
        </div>
    );
}