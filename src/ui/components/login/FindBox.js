import styled from "styled-components";
import IndexFindPw from "../buttons/common/IndexFindPw";
import UserCheckBtn from "../buttons/user/UserCheckBtn";
import IndexFindId from "./../buttons/common/IndexFindId";

export default function FindBox() {
  return (
    <div>
      <Box>
        <div>
          <IndexFindId />
          <IndexFindPw />
        </div>
        <UserCheckBtn />
      </Box>
    </div>
  );
}
const Box = styled.div`
  width: 400px;
  height: 244px;
  border-color: red;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
