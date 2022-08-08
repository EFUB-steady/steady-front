import React from "react";
import styled from "styled-components";
import { Subtitle3 } from "./../../../core/texts";
import { gray200 } from "../../../core/colors";

export default function MyAuthListItem({ title, auth }) {
  return (
    <Box>
      <TitleWrapper>
        <Subtitle3>{title}</Subtitle3>
      </TitleWrapper>
      <img
        src={auth.studyPostImageURL}
        alt="img"
        style={{
          width: "100%",
          height: "89%",
          objectFit: "cover",
        }}
      />
    </Box>
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
  padding: 15px 10px;
`;

const ListContaniner = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 450px;
  box-sizing: border-box;
  width: 520px;
  margin-top: 20px;
`;
