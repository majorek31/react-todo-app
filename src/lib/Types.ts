export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

export type TodoAddDto = {
  name: string;
};

export type TodoState = {
  todos: Todo[];
};

export type TodoAction =
  | { type: "ADD_TODO"; payload: TodoAddDto }
  | { type: "TOOGLE_TODO"; payload: number }
  | { type: "REMOVE_TODO"; payload: number };

export type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};
