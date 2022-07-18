import styled from "styled-components";
import peopleIcon from "../../../assets/icon_people.png";
import { gray400 } from "../../../core/colors";
import MainSubTitle from "../main/MainSubTitle";
export default function Members() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={peopleIcon} title={"스터디 구성원 관리"} />
      <Content>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
        <Li>회원을 추가할 수 있습니다!</Li>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.ul`
  border-left: 3px solid black;
  border-bottom: 3px solid black;
`;

const Li = styled.li`
  display: inline-block;
  width: 33.33%;
  height: 76px;
  border: 3px solid black;
  border-left: 0;
  border-bottom: 0;
  line-height: 76px;
  font-size: 18px;
  color: ${gray400};
  text-align: center;
`;
