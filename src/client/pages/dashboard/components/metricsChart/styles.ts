import { styled } from "@linaria/react";

const Container = styled.div`
  grid-column: span 2;

  display: flex;
  flex-direction: column;
  background-color: var(--background-foreground);
  gap: 16px;
  padding: 32px;

  border: 1px solid var(--border);
  border-radius: 8px;
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0%;
  color: var(--text-body);
`;

export { Container, Header };
