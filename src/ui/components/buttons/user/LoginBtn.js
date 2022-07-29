import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLogin } from "../../../../feature/login/recoil/useLogin";
import { useLoginForm } from "../../../../feature/login/recoil/useLoginForm";
import { useLoginFailModal } from "../../../modal/recoil/hooks/useModals";

export default function LoginBtn() {
  const { loginReset } = useLoginForm();
  const { login, isLoading } = useLogin();
  const { openModal } = useLoginFailModal();
  const navigation = useNavigate();

  const loginHandler = () => {
    login({
      onSuccess: () => {
        loginReset();
        navigation("/main");
      },
      onFail: () => {
        openModal();
      },
    });
  };

  // TODO: 로딩 예쁘게 하기..
  if (isLoading) return <div>loading...</div>;

  return <Button onClick={() => loginHandler()}>로그인</Button>;
}

const Button = styled.button`
  width: 77px;
  height: 130px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
