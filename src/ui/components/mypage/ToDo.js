import styled from "styled-components";

export default function ToDo() {
  return (
    <>
      <Text>TO DO LIST</Text>
      <Box />
    </>
  );
}

const Box = styled.div`
  box-sizing: border-box;

  width: 324px;
  height: 94px;

  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
`;

const Text = styled.div`
  width: 200px;
  height: 50px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;
