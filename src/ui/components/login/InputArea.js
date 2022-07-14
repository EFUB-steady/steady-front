import styled from "styled-components";

import { hintColor } from "./../../../core/colors";

export default function InputArea() {
  return (
    <Input>
      <input></input>;
    </Input>
  );
}

const Input = styled.div`
  /*박스*/
  width: 300px;
  height: 42px;
  background: #eeeeee;
  border-radius: 5px;
  margin: 4px;
  /*글씨*/
  color: ${hintColor};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding-left: 17.15px;
`;
