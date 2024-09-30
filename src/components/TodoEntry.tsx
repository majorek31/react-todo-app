import { Todo } from "../lib/Types";
import TrashCan from '../assets/trash-can.svg';

type TodoEntryProps = {
    todo: Todo;
    onTaskDelete: (todo: Todo) => void;
};

export default function TodoEntry(props: TodoEntryProps) {
    return (
        <div className="w-full flex justify-between p-2 border-b-2 pt-6 hover:bg-gray-200 border-gray-300">
            <p className="pl-4">{props.todo.name}</p>
            <button onClick={() => {props.onTaskDelete(props.todo)}}><img className="w-5" src={TrashCan}/></button>
        </div>
    );
}