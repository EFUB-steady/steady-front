import styled from "styled-components";
import { Title3 } from "../../../core/texts";

function CheckPic() {
  return (
    <>
      <Title3>사진 인증하기</Title3>
      <Box>
        <AuthBox>
          <Box2 />
          <Button>업로드 하기 </Button>
        </AuthBox>
      </Box>
    </>
  );
}
export default CheckPic;

const Box = styled.div`
  width: 400px;
  height: 270px;
  line-height: 35px;
  margin-left: 5px;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Box2 = styled.div`
  width: 300px;
  height: 150px;
  line-height: 35px;
  margin-left: 5px;
  box-sizing: border-box;
  background: #dadddf;
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 3rem;
`;

const AuthBox = styled.div`
  width: 380px;
  height: 200px;
  line-height: 35px;
  margin-left: 40px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 108px;
  height: 40px;
  background: gray;
  border-radius: 5px;
  color: white;
  margin: 4px;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  margin-top: 15px;
  margin-left: 6.5rem;
`;
