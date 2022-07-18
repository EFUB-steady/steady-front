import styled from "styled-components";
import goBackIcon from "../../../../assets/icon_undo.png";
import { useNavigate } from "react-router-dom"; // Import react-route-dom

export default function GoBackBtn() {
  const navigate = useNavigate();
  return <BackImg src={goBackIcon} onClick={() => navigate(-1)} />;
}

const BackImg = styled.img`
  height: 45px;
  width: 45px;
  margin-bottom: 28px;
  &:hover {
    cursor: pointer;
  }
`;
