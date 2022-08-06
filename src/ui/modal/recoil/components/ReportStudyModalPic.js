import styled from "styled-components";
import { gray100, hintColor } from "../../../../core/colors";
import icon from "../../../../assets/icon_picture_card_mypage.png";
import { Subtitle2 } from "../../../../core/texts";
import studyPic from "../../../../assets/studypic.jpg";

//신고_자세히보기 부분의 사진 인증 컴포넌트 유아이
export function ReportStudyModalPic() {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleIcon src={icon} />
        <Subtitle2>
          <div style={{ marginTop: "11px" }}>사진 인증하기</div>
        </Subtitle2>
      </TitleWrapper>
      <PicWrapper>
        <StudyPic src={studyPic} />
      </PicWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 920px;
  height: 517.5px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 40px;
  box-sizing: border-box;
  border-radius: 5px;
`;
const TitleWrapper = styled.div`
  width: 914px;
  height: 8%;
  background-color: #ffffff;
  border-bottom: 3px solid #000000;
  display: flex;
  box-sizing: border-box;
`;
const TitleIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 17px;
  margin-right: 9px;
  margin-top: 9px;
`;

const StudyPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const PicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92%;
  flex-direction: column;
`;
