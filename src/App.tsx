import { useState } from "react";
import CenteredBox from "./components/CenteredBox";
import Header from "./components/Header";
import { Todo } from "./lib/Types";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";

const defaultTodos = [
  {
    name: "Wash dishes",
    completed: false
  },
  {
    name: "Walk the dog out",
    completed: false
  },
] as Array<Todo>;

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  function addTask(todo: Todo) {
    if (todo.name.length < 1)
      return;
    setTodos([...todos, todo]);
  }
  function removeTask(todo: Todo) {
    setTodos([...todos.filter(v => v != todo)]);
  }
  return (
    <CenteredBox>
      <Header todos={todos}/>
      <div className="flex h-full">
        <TodoList todos={todos} onTaskDelete={removeTask}/>
        <Sidebar>
          <AddTask onTaskAdd={addTask}/>
        </Sidebar>
      </div>
    </CenteredBox>
  );
}

export default App;
