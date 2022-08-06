import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useTodos } from "../recoil/useTodos";

export const useTodosAPI = () => {
  const { setTodos } = useTodos();

  const todosAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get("todos");

      if (data) {
        setTodos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { todosAPI };
};
