import styled from "styled-components";
import Larrow from "../../../assets/LeftArrow.png";
import Rarrow from "../../../assets/RightArrow.png";

export default function ArrowBtn() {
  return (
    <Button>
      <Arrow src={Larrow} />
    </Button>
  );
}

const Button = styled.button`
  width: 40px;
  height: 200px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;

const Arrow = styled.img`
  width: 13px;
  height: 19px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 10px;
`;
