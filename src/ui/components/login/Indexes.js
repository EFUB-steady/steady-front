import styled from "styled-components";
import IndexFindPw from "../buttons/common/IndexFindPw";
import IndexFindId from "../buttons/common/IndexFindId";

export default function Indexes() {
  return (
    <div>
      <Box>
        <div>
          <IndexFindId />
          <IndexFindPw />
        </div>
      </Box>
    </div>
  );
}
const Box = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  flex-direction: column;
`;
