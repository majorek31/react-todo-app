import { useState } from "react";
import { Todo } from "../lib/Types";

type ListProps = {
    onTaskAdd: (todo: Todo) => void;
};

export default function AddTask(props: ListProps) {
    const [task, setTask] = useState('');
    return (
        <div className="w-full flex justify-center p-2 border-b-2 pt-6">
            <div className="flex flex-col justify-start items-center w-full">
                <label className="w-full">
                    <input type="text" className="border-4 w-full" onChange={(e) => setTask(e.target.value)} value={task}/>
                </label>
                <button className="border-2 w-full m-2" onClick={() => {props.onTaskAdd({name: task, completed: false}); setTask("")}}>Add this task</button>
            </div>
        </div>
    );
}