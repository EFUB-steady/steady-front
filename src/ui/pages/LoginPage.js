import styled from "styled-components";
import Login from "../components/login/Login";
import pic from "../../assets/web_explanation_pic.png";
import { gray300 } from "../../core/colors";
import GoBackBtn from "./../components/buttons/common/GoBackBtn";

export default function LoginPage() {
  return (
    <div>
      <Wrapper>
        <GoBackBtn />
        <LeftContent>
          <Login />
        </LeftContent>
        <RightContent>
          <Pic src={pic} />
        </RightContent>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const LeftContent = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  position: absolute;
  left: 10%;
  right: 10%;
  top: 30%;
  bottom: 30%;
`;

const RightContent = styled.div`
  position: absolute;
  width: 640px;
  height: 1024px;
  left: 800px;
  top: 0px;

  background: ${gray300};
`;

const Pic = styled.img`
  width: 640px;
  height: 1024px;
  left: 800px;
  top: 0px;
`;
