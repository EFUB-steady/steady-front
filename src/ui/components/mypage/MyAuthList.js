import styled from "styled-components";
import { Subtitle3 } from "./../../../core/texts";

export default function MyAuthList() {
  return (
    <ListContaniner>
      <Box>
        <TitleWrapper>
          <Subtitle3>스터디 이름</Subtitle3>
        </TitleWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <Subtitle3>스터디 이름</Subtitle3>
        </TitleWrapper>
      </Box>
    </ListContaniner>
  );
}

const Box = styled.div`
  width: 480px;
  height: 300px;
  border: 3px solid #000000;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  width: 477px;
  height: 20px;

  border-bottom: 3px solid #000000;
`;

const ListContaniner = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 450px;
  box-sizing: border-box;
  width: 520px;
  margin-top: 20px;
`;
