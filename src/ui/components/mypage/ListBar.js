import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import ListBarStudyList from "./ListBarStudyList";
import ArrowBtn from "./ArrowBtn";
import ArrowBtn2 from "./ArrowBtn2";

export default function ListBar() {
  return (
    <>
      <ContentWrapper>
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

  width: 1208px;
  height: 200px;
`;

// const TitleText = styled.div`
//   width: 200px;
//   height: 21px;

//   font-family: "Pretendard";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 21px;
//   line-height: 100%;
//   margin-bottom: 45px;
// `;
