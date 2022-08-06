import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../../feature/SignUp/recoil/useSignUp";
import { useSignUpAPI } from "../../../../feature/SignUp/api/useSignUpAPI";
import { useSignUpFailModal } from "../../../modal/recoil/hooks/useModals";

export default function UserJoinBtn() {
  const { signUpAPI } = useSignUpAPI();
  const navigation = useNavigate();
  const { openModal } = useSignUpFailModal();
  const { signUpReset } = useSignUp();

  const { name, nickname, email, password, phone } = useSignUp();

  const signUpHandler = () => {
    if (
      name !== "" &&
      nickname !== "" &&
      email !== "" &&
      password !== "" &&
      phone !== ""
    ) {
      signUpAPI({
        onSuccess: () => {
          signUpReset();
          navigation("/");
        },
        onFail: () => {
          openModal();
        },
      });
    } else {
      openModal();
    }
  };

  return <Button onClick={() => signUpHandler()}>회원 가입</Button>;
}

const Button = styled.button`
  width: 340px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
  margin-right: 100px;
`;
