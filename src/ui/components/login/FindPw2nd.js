import styled from "styled-components";
import icon from "../../../assets/icon_email_success.png";

export default function FindPw2nd() {
  return (
    <>
      <Content>
        <Img src={icon} />

        <Text>이메일이 성공적으로 전송되었습니다. </Text>
      </Content>
    </>
  );
}

const Text = styled.div`
  width: 280px;
  height: 42px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 400px;
  height: 196px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  padding-bottom: 15px;
  padding-top: 30px;
`;
