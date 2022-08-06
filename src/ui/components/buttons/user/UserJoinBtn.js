import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../../feature/SignUp/recoil/useSignUp";
import { useSignUpAPI } from "../../../../feature/SignUp/api/useSignUpAPI";
import { useState } from "react";
import SignUpFailModal from "../../../modal/modals/SignUpFailModal";
export default function UserJoinBtn() {
  const { signUpAPI } = useSignUpAPI();
  const navigation = useNavigate();

  const { signUpReset } = useSignUp();

  const { name, nickname, email, password, phone } = useSignUp();
  const [isOpen, setIsOpen] = useState(false);

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
          setIsOpen(true);
        },
      });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <SignUpFailModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Button onClick={() => signUpHandler()}>회원 가입</Button>
    </>
  );
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
