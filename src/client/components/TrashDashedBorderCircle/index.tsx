import { Trash2 } from "lucide-react";
import { Container } from "./styled";

function TrashDashedBorderCircle() {
  return (
    <Container>
      <div className="dashedBorderCircle">
        <div className="filledCircle">
          <Trash2 />
        </div>
      </div>
    </Container>
  );
}

export { TrashDashedBorderCircle };
