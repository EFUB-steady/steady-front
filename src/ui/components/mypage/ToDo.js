import styled from "styled-components";

export default function ToDo() {
  return (
    <ToDoBox>
      <Text>TO DO LIST</Text>
      <Box />
    </ToDoBox>
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
  width: 150px;
  height: 50px;
  margin-top: 40px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;

const ToDoBox = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;
