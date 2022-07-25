import styled from "styled-components";
import { Title3 } from "../../../core/texts";

function CheckLink() {
  return (
    <>
      <Title3>링크 인증하기</Title3>
      <Box>
        {" "}
        <AuthBox>
          블로그, 깃허브 등의 글을 작성한 웹 링크로 인증하기
          <Input>
            <input type="text" placeholder="https://" />
          </Input>
          <Button>업로드 하기 </Button>
        </AuthBox>
      </Box>
    </>
  );
}
export default CheckLink;

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

const AuthBox = styled.div`
  width: 380px;
  height: 200px;
  line-height: 35px;
  margin-left: 30px;
  margin-top: 20px;
`;

const Input = styled.div`
  width: 100%;
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
  margin-top: 40px;
  margin-left: 10rem;
`;
