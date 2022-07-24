import styled from "styled-components";
import { gray100, hintColor, button2Color } from "../../../../core/colors";
import icon from "../../../../assets/icon_picture_card_mypage.png";
import alerticon from "../../../../assets/icon_alert_white.png";
import { Subtitle2 } from "../../../../core/texts";
import { style } from "@mui/system";

export function OtherStudyModalUrl({ member }) {
  return (
    <Wrapper>
      <TitleWrapper>
        <TItleContainer>
          <TitleIcon src={icon} />
          <Subtitle2>URL 인증하기</Subtitle2>
        </TItleContainer>
        <IconWrapper>
          <AlertIcon src={alerticon} />
        </IconWrapper>
      </TitleWrapper>

      <div>
        <InputUrl
          type="url"
          pattern="http://*"
          placeholder="http://"
        ></InputUrl>
      </div>
      <UrlUserName>
        <UrlUserCircle color={member.color} /> {member.name}님{" "}
      </UrlUserName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 920px;
  height: 167px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 40px;
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
  border-radius: 0px 5px 5px 0px;
`;

const TitleIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 9px;
`;

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
