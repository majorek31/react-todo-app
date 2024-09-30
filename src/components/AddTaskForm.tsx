import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

type AddTaskFormProps = {};

export default function AddTask(props: AddTaskFormProps) {
    const { dispatch } = useTodos();
    const [task, setTask] = useState('');
    function onFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {
                name: task,
            }
        });
        setTask("");
    }
    return (
        <div className="w-full flex justify-center p-2 border-b-2 pt-6">
            <form className="flex flex-col justify-start items-center w-full" onSubmit={onFormSubmit}>
                <label className="text-center w-full">Add new task</label>
                <input type="text" placeholder="Task name" className="border-2 border-gray-400 placeholder:pl-1 w-full rounded-md" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button className="border-2 w-3/4 m-2 rounded-lg">Add this task</button>
            </form>
        </div>
    );
}