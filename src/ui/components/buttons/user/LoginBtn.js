import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginAPI } from "../../../../feature/login/api/useLoginAPI";
import { useLoginInput } from "../../../../feature/login/recoil/useLoginInput";
import { useMyStudyAPI } from "../../../../feature/studies/myStudy/api/useMyStudyAPI";
import LoginFailModal from "../../../modal/modals/LoginFailModal";
import { useState } from "react";
import { useSelectedStudyAPI } from "../../../../feature/studies/studySelect/api/useSelectedStudyAPI";

export default function LoginBtn() {
  const { loginAPI, isLoading: isLoginLoading } = useLoginAPI();
  const navigation = useNavigate();
  const { myStudyAPI } = useMyStudyAPI();
  const [isOpen, setIsOpen] = useState(false);
  const { loginReset } = useLoginInput();

  const loginHandler = () => {
    loginAPI({
      onSuccess: () => {
        myStudyAPI();

        setTimeout(() => {
          navigation(`/studies/53`); // TODO: 첫페이지로 변경 필요
          loginReset();
        }, 1000);
      },
      onFail: () => {
        setIsOpen(true);
      },
    });
  };

  //TODO: 로딩 처리
  if (isLoginLoading) return <div>loading...</div>;

  return (
    <>
      <LoginFailModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Button onClick={() => loginHandler()}>로그인</Button>
    </>
  );
}

const Button = styled.button`
  width: 77px;
  height: 130px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
