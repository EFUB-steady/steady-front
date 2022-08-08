import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import NoticeItem from "./NoticeItem";

export default function NoticeList() {
  return (
    <Wrapper>
      <NoticeItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  min-width: 987px;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
  flex-direction: column;
`;
