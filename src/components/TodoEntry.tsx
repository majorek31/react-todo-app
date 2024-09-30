import { Todo } from "../lib/Types";
import TrashCan from '../assets/trash-can.svg';
import { useTodos } from "../contexts/TodoContext";

type TodoEntryProps = {
    todo: Todo;
};

export default function TodoEntry(props: TodoEntryProps) {
    const { dispatch } = useTodos();
    return (
        <div className={`w-full flex justify-between p-2 border-b-2 pt-6 border-gray-300 ${props.todo.completed ? "bg-green-200" : "" } `} onClick={() => {dispatch({type: "TOOGLE_TODO", payload: props.todo.id})}}>
            <p className="pl-4">{props.todo.name}</p>
            <button onClick={() => {dispatch({type: "REMOVE_TODO", payload: props.todo.id})}}><img className="w-5" src={TrashCan}/></button>
        </div>
    );
}