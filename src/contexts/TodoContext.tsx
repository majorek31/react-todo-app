import { createContext, ReactNode, useContext, useReducer } from "react";
import { TodoAction, TodoContextType, TodoState } from "../lib/Types";
import { getNextTodoId } from "../lib/utilts";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodoId = getNextTodoId(state.todos);
      const name = action.payload.name.trim();
      if (name.length < 1) return state;
      return {
        ...state,
        todos: [...state.todos, { id: newTodoId, completed: false, name }],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOOGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    default:
      return state;
  }
};

type TodoProviderProps = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be called within TodoProvider");
  return context;
};
