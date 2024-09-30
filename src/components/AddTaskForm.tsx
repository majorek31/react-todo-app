import { useState } from "react";
import { Todo } from "../lib/Types";

type AddTaskFormProps = {
    onTaskAdd: (todo: Todo) => void;
};

export default function AddTask(props: AddTaskFormProps) {
    const [task, setTask] = useState('');
    function onFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        props.onTaskAdd({name: task, completed: false});
        setTask("");
    }
    return (
        <div className="w-full flex justify-center p-2 border-b-2 pt-6">
            <form className="flex flex-col justify-start items-center w-full" onSubmit={onFormSubmit}>
                <label className="w-full">
                    <input type="text" className="border-4 w-full" onChange={(e) => setTask(e.target.value)} value={task}/>
                </label>
                <button className="border-2 w-full m-2">Add this task</button>
            </form>
        </div>
    );
}