import styled from "styled-components";
import { gray300 } from "../../../../core/colors";
import { format } from "date-fns";

export default function StudyModalTitle({ titleText, buttonText }) {
  const today = new Date();
  const formattedToday = format(today, "MM월 dd일");

  return (
    <>
      <Wrapper>
        <Title>
          {formattedToday} {titleText}
        </Title>
        <Button onClick={() => {}}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </Wrapper>
      <Divider />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: black;
  line-height: 100%;
`;

const Button = styled.button`
  background-color: ${gray300};
  border-radius: 5px;
  width: 81px;
  height: 40px;
`;

const ButtonText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
`;

const Divider = styled.div`
  width: 920px;
  height: 3px;
  background-color: #000000;
  border-radius: 5px;
  display: flex;
  margin-top: 16px;
`;
