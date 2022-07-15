import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";

export default function RuleAuthDay({}) {
  return (
    <AuthDaysBox>
      <Body2>월, 화, 수, 목, 금, 토</Body2>
    </AuthDaysBox>
  );
}

const AuthDaysBox = styled.div`
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
`;
