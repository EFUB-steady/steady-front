import styled from "styled-components";
import icon from "../../../../assets/icon_setting.png";
import { Subtitle1 } from "../../../../core/texts";
import LinkCopyBtn from "../../buttons/study/LinkCopyBtn";

export default function StudySetting() {
  return (
    <Wrapper>
      <SettingWrapper>
        <SettingIcon src={icon} />
        <Subtitle1>스터디 설정 ▶ </Subtitle1>
      </SettingWrapper>
      <LinkCopyBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: space-between;
`;

const SettingWrapper = styled.div`
  display: flex;
`;
const SettingIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
