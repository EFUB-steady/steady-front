import styled from "styled-components";

export default function ToDo() {
  return (
    <>
      <Text>TO DO LIST</Text>
      <Box />
    </>
  );
}

const Text = styled.div`
  position: absolute;
  width: 113px;
  height: 21px;
  left: 288px;
  top: 272px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;

const Box = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 324px;
  height: 94px;
  left: 288px;
  top: 309px;

  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
`;
