import styled from "styled-components";
import { Title3 } from "../../../core/texts";

const OPTIONS = [
  { value: "0", name: "코딩 스터디" },
  { value: "1", name: "토플 스터디" },
  { value: "2", name: "운동 스터디" },
  { value: "3", name: "독서 스터디" },
  { value: "4", name: "기상 스터디" },
];

const SelectBox = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Title3>스터디 이름</Title3>
      <SelectBoxWrapper>
        <Select onChange={handleChange}>
          {props.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              defaultValue={props.defaultValue === option.value}
            >
              {option.src}
              {option.name}
            </option>
          ))}
        </Select>
        <IconSVG
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 14L16 6H4L10 14Z"
            fill="#1A1A1A"
          />
        </IconSVG>
      </SelectBoxWrapper>
    </>
  );
};

function Search() {
  return <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>;
}

export default Search;

const SelectBoxWrapper = styled.div`
  display: flex;
`;

export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 2.5px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border-color: red;
  }
  margin-top: 2rem;
`;

const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
  margin-top: 2rem;
`;

// const Dot = styled.div`
//   margin-top: 10px;
//   margin-left: 10px;

//   width: 6%;

//   background: radial-gradient(farthest-side, #fc3c49 100%, transparent);
// `;
