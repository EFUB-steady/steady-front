import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../../feature/SignUp/recoil/useSignUp";
import { useSignUpAPI } from "../../../../feature/SignUp/api/useSignUpAPI";
import { useSignUpFailModal } from "../../../modal/recoil/hooks/useModals";

export default function UserJoinBtn() {
  const { signup, isLoading } = useSignUpAPI();
  const navigation = useNavigate();
  const { openModal } = useSignUpFailModal();
  const { signUpReset } = useSignUp();

  const signUpHandler = () => {
    signup({
      onSuccess: () => {
        signUpReset();
        navigation("/main");
      },
      onFail: () => {
        openModal();
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return <Button onClick={() => signUpHandler()}>회원 가입</Button>;
}

const Button = styled.button`
  width: 300px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
