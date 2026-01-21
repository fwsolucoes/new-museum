import { styled } from "@linaria/react";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: var(--text-heading);
  }
`;

export { Container };
