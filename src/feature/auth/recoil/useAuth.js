import { useRecoilState } from "recoil";
import { authState } from "./authState";

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const updateAuth = async (token) => {
    if (!token) return;

    setAuth({
      token,
    });
  };
  return { ...auth, updateAuth };
};
