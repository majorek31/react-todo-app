import { Todo } from "./types";

export const getNextTodoId = (todos: Todo[]): number => {
  if (todos.length === 0) return 1;

  const maxId = Math.max(...todos.map((todo) => todo.id));
  return maxId + 1;
};
