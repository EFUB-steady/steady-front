import styled from "styled-components";

export default function ToDo() {
  return (
    <ToDoBox>
      <Text>TO DO LIST</Text>
      <TableContainer>
        <Box>
          <p> 스터디 이름 ...: 00시 00분까지 인증</p>
          <p> 스터디 이름 ...: 00시 00분까지 인증</p>
          <p> 스터디 이름 ...: 00시 00분까지 인증</p>
          <p> 스터디 이름 ...: 00시 00분까지 인증</p>
        </Box>
      </TableContainer>
    </ToDoBox>
  );
}

const Box = styled.div`
  width: 380px;
  height: 200px;
  line-height: 35px;
  margin-left: 15px;
  /* box-sizing: border-box;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  */
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
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 100px;
  box-sizing: border-box;
  width: 380px;
  border: 3px solid #000000;
  border-radius: 5px;

  background: #f5f5f5;
`;
