import { styled } from "@linaria/react";
import { screenBreakpoints } from "~/client/themes/screenBreakpoints";

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  padding-top: 32px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${screenBreakpoints.xl} {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px 0;
  }
`;

export { Container, MetricsGrid, SummaryGrid };
