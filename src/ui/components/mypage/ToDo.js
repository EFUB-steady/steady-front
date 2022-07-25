import styled from "styled-components";

export default function ToDo() {
  return (
    <ToDoBox>
      <Text>TO DO LIST</Text>
      <TableContainer>
        <Box>
          <p>스터디 이름</p>
          <p>스터디 이름</p>
        </Box>
      </TableContainer>
    </ToDoBox>
  );
}

const Box = styled.div`
  box-sizing: border-box;
  width: 324px;
  height: 200px;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 30px;
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
  width: 345px;
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 100px;
  box-sizing: border-box;
  width: 342px;

  background: #f5f5f5;
`;
