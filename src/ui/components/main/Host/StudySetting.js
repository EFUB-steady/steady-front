import styled from "styled-components";
import icon from "../../../../assets/icon_setting.png";
import { Subtitle1 } from "../../../../core/texts";

export default function StudySetting() {
  return (
    <Wrapper>
      <SettingIcon src={icon} />
      <Subtitle1>스터디 설정 ▶ </Subtitle1>
    </Wrapper>
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
