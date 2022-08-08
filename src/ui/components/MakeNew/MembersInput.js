import styled from "styled-components";
import peopleIcon from "../../../assets/icon_people.png";
import { gray400 } from "../../../core/colors";
import CopyInviteLinkBtn from "../buttons/study/CopyInviteLinkBtn";
import MainSubTitle from "../main/MainSubTitle";
export default function MembersInput() {
  return (
    <>
      <TitleWrapper>
        <MainSubTitle iconSrc={peopleIcon} title={"스터디 구성원 관리"} />
        <CopyInviteLinkBtn />
      </TitleWrapper>
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
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  min-width: 987px;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.ul`
  min-width: 987px;
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
