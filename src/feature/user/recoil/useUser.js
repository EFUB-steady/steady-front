import { useRecoilState } from "recoil";
import { userState } from "./userState";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  return {
    user,
    setUser,
  };
};
