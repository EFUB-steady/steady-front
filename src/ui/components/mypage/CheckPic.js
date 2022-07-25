import styled from "styled-components";
import { Title3 } from "../../../core/texts";

function CheckPic() {
  return (
    <>
      <Title3>사진 인증하기</Title3>
      <Box></Box>
    </>
  );
}
export default CheckPic;

const Box = styled.div`
  width: 500px;
  height: 200px;
  line-height: 35px;
  margin-left: 5px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
