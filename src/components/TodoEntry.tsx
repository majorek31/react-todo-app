import { Todo } from "../lib/Types";
import TrashCan from '../assets/trash-can.svg';

type TodoEntryProps = {
    todo: Todo;
    onTaskDelete: (todo: Todo) => void;
};

export default function TodoEntry(props: TodoEntryProps) {
    return (
        <div className={`w-full flex justify-between p-2 border-b-2 pt-6 border-gray-300 ${props.todo.completed ? "bg-green-200" : "" } `} onClick={() => {props.todo.completed = true;}}>
            <p className="pl-4">{props.todo.name}</p>
            <button onClick={() => {props.onTaskDelete(props.todo)}}><img className="w-5" src={TrashCan}/></button>
        </div>
    );
}