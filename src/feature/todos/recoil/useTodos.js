import { useRecoilState } from "recoil";
import { todosState } from "./todosState";

export const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  return {
    todos,
    setTodos,
  };
};
