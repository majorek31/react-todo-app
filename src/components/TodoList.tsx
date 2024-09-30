import { Todo } from "../lib/Types";
import TodoEntry from "./TodoEntry";

type ListProps = {
    todos: Array<Todo>;
    onTaskDelete: (todo: Todo) => void;
};

export default function TodoList(props: ListProps) {
    return (
        <div className="w-2/3 h-full flex flex-col pb-8 overflow-y-scroll custom-scrollbar">
            {
                props.todos.map(todo => <TodoEntry todo={todo} onTaskDelete={props.onTaskDelete}/>)
            }
        </div>
    );
}