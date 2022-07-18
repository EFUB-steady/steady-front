import styled from "styled-components";
import goBackIcon from "../../../../assets/icon_undo.png";
export default function GoBackBtn() {
  return <BackImg src={goBackIcon} />;
}

const BackImg = styled.img`
  height: 45px;
  width: 45px;
  margin-bottom: 28px;
`;
