import CenteredBox from "./components/CenteredBox";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";
import AddTaskForm from "./components/AddTaskForm";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <CenteredBox>
        <Header />
        <div className="lg:flex h-full">
          <Sidebar>
            <AddTaskForm />
          </Sidebar>
          <TodoList />
        </div>
      </CenteredBox>
    </TodoProvider>
  );
}

export default App;
