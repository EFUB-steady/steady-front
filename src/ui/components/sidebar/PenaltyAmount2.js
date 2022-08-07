import { Row } from "../commons/Row";
import { Subtitle3 } from "../../../core/texts";
import { usePenalty } from "../../../feature/penalty/recoil/usePenalty";

export default function PenaltyAmount() {
  const { penalty } = usePenalty();

  const renderLastFine = () => {
    let result = 0;
    for (let i = 0; i < penalty.length; i++) {
      result = result + penalty[i].lastFine;
    }
    return result;
  };

  return (
    <Row style={{ marginTop: 5 }}>
      <Subtitle3>{renderLastFine()}</Subtitle3>
      <div style={{ width: 5 }} />
      <Subtitle3>원</Subtitle3>
    </Row>
  );
}
