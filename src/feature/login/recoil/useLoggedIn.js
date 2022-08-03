import { useRecoilState } from "recoil";
import { loggedInState } from "./loginState";

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInState);

  return {
    isLoggedIn,
    setIsLoggedIn,
  };
};
