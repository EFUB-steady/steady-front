import styled from "styled-components";
import {useNavigate} from "react-router-dom"
import { useSignIn } from "../../../../feature/SignIn/recoil/useSignIn";
import { useSignInAPI } from "../../../../feature/SignIn/api/useSignInAPI";
import { useSignInFailModal } from "../../../modal/recoil/hooks/useModals";

export default function UserJoinBtn() {
  const {signin, isLoading} = useSignInAPI();
  const navigation = useNavigate();
  const {openModal} = useSignInFailModal();
  const {signInReset} = useSignIn();

  const signinHandler = () => {
    signin({
      onSuccess: () => {
        signInReset();
        navigation("/main");
      },
      onFail: () => {
        openModal();
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return <Button onClick={() => signinHandler()}>회원 가입</Button>;
}

const Button = styled.button`
  width: 300px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
