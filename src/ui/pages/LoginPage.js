import styled from "styled-components";
import Login from "../components/login/Login";
import pic from "../../assets/web_explanation_pic.png";
import { gray300 } from "../../core/colors";

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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContent = styled.div`
  width: 400rem;
  float: left;
  box-sizing: border-box;
  margin-top: 200px;
  margin-left: 350px;

  padding-right: 215px;
`;

const RightContent = styled.div`
  position: absolute;
  width: 640px;
  height: 1024px;
  left: 1250px;
  top: 0px;

  background: ${gray300};
`;

const Pic = styled.img`
  width: 500rem;
  height: 750px;
`;
