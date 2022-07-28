import { useRecoilState } from "recoil";
import { userState } from "../states/userState";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const updateUser = (accessToken) => {
    setUser({
      userId: "1",
      nickname: "화여니",
      email: "ewha@ewha.com",
      phone: "01098889888",
      name: "김이화",
      message: "",
    }); // 더미값!!!!
  };
  return { ...user };
};
