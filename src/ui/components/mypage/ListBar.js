import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import ListBarStudyList from "./ListBarStudyList";
import ArrowBtn from "./ArrowBtn";
import ArrowBtn2 from "./ArrowBtn2";

export default function ListBar() {
  return (
    <>
      <ContentWrapper>
        <TitleBox>
          <TitleText>나의 참여 스터디</TitleText>
        </TitleBox>
        <ListBarBox>
          <ArrowBtn />
          <ListBarStudyList />
          <ArrowBtn2 />
        </ListBarBox>
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  width: 850px;
`;

const ListBarBox = styled.div`
  background-color: ${gray100};
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1200px;
  height: 200px;
  left: 200px;
  top: 824px;
`;

const TitleText = styled.div`
  width: 200px;
  height: 21px;
  display: flex;
  margin: 30px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
  margin-bottom: 45px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 238px;
  top: 760px;
`;
