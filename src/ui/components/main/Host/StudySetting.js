import styled from "styled-components";
import icon from "../../../../assets/icon_setting.png";
import { Subtitle1 } from "../../../../core/texts";
import CustomLink from "../../commons/CustomLink";

export default function StudySetting() {
  return (
    <CustomLink to="/studies">
      <Wrapper>
        <SettingIcon src={icon} />
        <Subtitle1>스터디 설정 </Subtitle1>
      </Wrapper>
    </CustomLink>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 28px;
`;
const SettingIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
