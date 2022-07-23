import styled from "styled-components";
import { gray100, button2Color } from "../../../../core/colors";
import icon from "../../../../assets/icon_link.png";
import { Subtitle2 } from "../../../../core/texts";

export function OtherStudyModalUrl() {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleIcon src={icon} />
        <Subtitle2>
          <div style={{ marginTop: "11px" }}>URL 인증하기</div>
        </Subtitle2>
      </TitleWrapper>

      <div>
        <InputUrl
          type="url"
          pattern="http://*"
          placeholder="http://"
        ></InputUrl>
      </div>
      <UserName><UserCircle/> 000000님 </UserName>
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

const TitleWrapper = styled.div`
  width: 914px;
  height: 40px;
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

const UserName = styled.div`
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
const UserCircle = styled.span`
width:20px;
height:20px;
border-radius: 50%;
border: 1px solid #FFFFFF;
background-color:red;
margin-right:13px
`;