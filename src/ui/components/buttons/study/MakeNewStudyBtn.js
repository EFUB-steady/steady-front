import styled from "styled-components";

export default function MakeNewStudyBtn() {
  return (
    <Button>
      <Text>스터디 개설하기</Text>
    </Button>
  );
}

const Button = styled.div`
  width: 152px;
  height: 48px;
  background-color: black;
  border-radius: 5px;
  margin-top: 58px;
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
`;
