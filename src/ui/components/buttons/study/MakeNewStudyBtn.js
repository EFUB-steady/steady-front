import styled from "styled-components";
import CustomLink from "../../commons/CustomLink";

export default function MakeNewStudyBtn() {
  return (
    // <CustomLink to="/makenew" textColor="white">
    <CustomLink to="/studies" texColor="white">
      <Button>
        <Text>스터디 개설하기</Text>
      </Button>
    </CustomLink>
  );
}

const Button = styled.div`
  width: 152px;
  height: 48px;
  background-color: black;
  border-radius: 5px;
  margin-top: 40px;
`;

const Text = styled.div`
  display: flex;
  height: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: "pretendard-regular";
`;
