import styled from "styled-components";
import Login from "../components/login/Login";
import pic from "../../assets/web_explanation_pic.png";

export default function LoginPage() {
  return (
    <div>
      <Wrapper>
        <LeftContent>
          <Login />
        </LeftContent>
        <Pic src={pic} />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContent = styled.div`
  width: 400rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10rem;
`;

const Pic = styled.img`
  height: 750px;
`;
