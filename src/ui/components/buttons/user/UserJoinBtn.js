import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../../feature/SignUp/recoil/useSignUp";
import { useSignUpAPI } from "../../../../feature/SignUp/api/useSignUpAPI";
import { useSignUpFailModal } from "../../../modal/recoil/hooks/useModals";

export default function UserJoinBtn() {
  const { signUpAPI, isLoading } = useSignUpAPI();
  const navigation = useNavigate();
  const { openModal } = useSignUpFailModal();
  const { signUpReset } = useSignUp();

  const {
    name,
    nickname,
    email,
    password,
    phone,
    setName,
    setNickName,
    setEmail,
    setPassWord,
    setPhone,
  } = useSignUp();

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
          console.log("가입 완");
        },
        onFail: () => {
          openModal();
          console.log("가입실패");
        },
      });
    } else {
      console.log("입력하시오");
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
