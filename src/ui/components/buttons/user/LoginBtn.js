import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginAPI } from "../../../../feature/login/api/useLoginAPI";
import { useLoginInput } from "../../../../feature/login/recoil/useLoginInput";
import { useUserAPI } from "../../../../feature/user/api/useUserAPI";
import { useMyStudyAPI } from "../../../../feature/studies/myStudy/api/useMyStudyAPI";
import { useRankingAPI } from "../../../../feature/ranking/api/useRankingAPI";
import LoginFailModal from "../../../modal/modals/LoginFailModal";
import { useState } from "react";

export default function LoginBtn() {
  const { loginAPI, isLoading: isLoginLoading } = useLoginAPI();
  const navigation = useNavigate();
  const { loginReset } = useLoginInput();
  const { rankingAPI } = useRankingAPI();
  const [isOpen, setIsOpen] = useState(false);

  // TODO: 에러처리
  const { userAPI } = useUserAPI({
    onSuccess: () => {
      console.log("success!!");
    },
    onFail: () => {
      console.log("fail....");
    },
  });

  const { myStudyAPI, isLoading: isMyStudyLoading } = useMyStudyAPI();

  const loginHandler = () => {
    loginAPI({
      onSuccess: () => {
        loginReset();
        navigation("/studies/53"); // TODO: 7번 말고, 기본 스터디로 변경 (현재 기본스터디를 볼수있는 api 없음)
        myStudyAPI();
        userAPI();
        rankingAPI();
      },
      onFail: () => {
        setIsOpen(true);
      },
    });
  };

  //TODO: 로딩 처리
  if (isLoginLoading) return <div>loading...</div>;
  if (isMyStudyLoading) return <div>loading...</div>;

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
