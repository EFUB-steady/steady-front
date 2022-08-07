import styled from "styled-components";
import { gray100, button2Color } from "../../../core/colors";
import icon from "../../../assets/icon_picture_card_mypage.png";
import alerticon from "../../../assets/icon_alert_white.png";
import { Subtitle2 } from "../../../core/texts";
import { useState } from "react";
import ReportToggle from "./ReportToggle";

export default function MemberListItem({ study }) {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const onClickToggle = () => {
    setIsReportOpen((prev) => !prev);
  };
  console.log(study);
  return (
    <>
      <Wrapper>
        {isReportOpen && (
          <ReportToggle name={study.userNickname} date={study.date} />
        )}
        <UserName>{study.userNickname}님</UserName>

        <TitleWrapper>
          <TItleContainer>
            <TitleIcon src={icon} />
            <Subtitle2>사진 인증</Subtitle2>
          </TItleContainer>

          <IconWrapper onClick={() => onClickToggle()}>
            <AlertIcon src={alerticon} />
          </IconWrapper>
        </TitleWrapper>
        <img
          src={study.studyPostImageURL}
          alt="img"
          style={{
            width: "100%",
            height: "92.5%",
            objectFit: "cover",
          }}
        />
      </Wrapper>

      <WrapperLink>
        <TitleWrapper>
          <TItleContainer>
            <TitleIcon src={icon} />
            <Subtitle2>링크 인증</Subtitle2>
          </TItleContainer>
        </TitleWrapper>
        <LinkWrapper>
          <LinkContext>
            {study.link == "" ? "링크가 없습니다." : study.link}
          </LinkContext>
        </LinkWrapper>
      </WrapperLink>

      <Divider />
    </>
  );
}
const Divider = styled.div`
  height: 16px;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 920px;
  height: 520px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 40px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const WrapperLink = styled.div`
  width: 920px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const AlertIcon = styled.img`
  width: 17.66px;
  height: 20.81px;
  background-color: black;
`;

const TitleWrapper = styled.div`
  width: 914px;
  height: 40px;
  background-color: #ffffff;
  border-bottom: 3px solid #000000;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;

const TItleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
`;

const IconWrapper = styled.div`
  width: 47px;
  height: 40px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 9px;
`;

const UserName = styled.div`
  position: absolute;
  margin-top: 40px;
  background-color: black;
  width: 141px;
  height: 40px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const UserCircle = styled.span`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: 1px solid #ffffff;
//   background-color: ${(props) => props.color};
//   margin-right: 13px;
// `;

const InputUrl = styled.input`
  width: 839.5px;
  height: 41.5px;
  background-color: ${button2Color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  border: none;
  color: #9c9c9c;
`;
const UrlUserName = styled.div`
  background-color: black;
  width: 141px;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 775px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UrlUserCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  background-color: ${(props) => props.color};
  margin-right: 13px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const LinkContext = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
`;
