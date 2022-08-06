import styled from "styled-components";
import { gray200 } from "../../../core/colors";
import { Subtitle3 } from "./../../../core/texts";

export default function MyAuthList() {
  return (
    <ListContaniner>
      <Box>
        <TitleWrapper>
          <Subtitle3>
            <div style={{ marginLeft: "10px" }}>스터디 이름</div>
          </Subtitle3>
        </TitleWrapper>
      </Box>
      <Box>
        <TitleWrapper>
          <Subtitle3>
            {" "}
            <div style={{ marginLeft: "10px" }}>스터디 이름</div>
          </Subtitle3>
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
  height: 22px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 3px solid #000000;
  border-right: 3px solid #000000;
  background-color: ${gray200};
`;

const ListContaniner = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 450px;
  box-sizing: border-box;
  width: 520px;
  margin-top: 20px;
`;
