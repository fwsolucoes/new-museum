import { styled } from "@linaria/react";

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const ManagementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export { Container, GridContainer, ManagementGrid };
