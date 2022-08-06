import styled from "styled-components";
import { useTodos } from "../../../feature/todos/recoil/useTodos";

export default function ToDo() {
  const { todos } = useTodos();

  const renderTodos = () => {
    const result = [];
    for (let i = 0; i < todos.length; i++) {
      result.push(
        <Table>
          [ {todos[i].studyName} ] : 오늘 {todos[i].hour}시 {todos[i].minute}
          분까지 인증!
        </Table>,
      );
    }
    return result;
  };

  return (
    <ToDoBox>
      <Text>TO DO LIST</Text>
      <TableContainer>{renderTodos()}</TableContainer>
    </ToDoBox>
  );
}

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
  padding: 15px;
`;

const Table = styled.div`
  display: flex;
  font-size: 14px;
`;
