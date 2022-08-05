import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import UpperRank from "./UpperRank";
import LowerRank from "./LowerRank";
import { useRankingAPI } from "../../../../feature/ranking/api/useRankingAPI";
import { useEffect } from "react";
import { useSelectedStudyId } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";

export default function RankingList() {
  const { selectedStudyId } = useSelectedStudyId();

  const { rankingAPI, isLoading } = useRankingAPI();

  useEffect(() => {
    rankingAPI({
      onSuccess: () => {
        console.log("rankingAPI success!!");
      },
      onFail: () => {
        console.log("rankingAPI fail....");
      },
    });
  }, [selectedStudyId]);

  if (isLoading) return <div>loading...</div>;
  return (
    <Wrapper>
      <UpperRank />
      <LowerRank />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 987px;
  height: auto;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
`;
