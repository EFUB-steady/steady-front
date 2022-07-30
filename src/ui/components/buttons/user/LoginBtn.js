import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLogin } from "../../../../feature/login/api/useLogin";
import { useLoginFailModal } from "../../../modal/recoil/hooks/useModals";
import { useLoginInput } from "../../../../feature/login/recoil/useLoginInput";

export default function LoginBtn() {
  const { login, isLoading } = useLogin();
  const navigation = useNavigate();
  const { openModal } = useLoginFailModal();
  const { loginReset } = useLoginInput();

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
