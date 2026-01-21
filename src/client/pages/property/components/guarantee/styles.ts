import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-foreground);
  gap: 16px;
  padding: 32px;

  border: 1px solid var(--border);
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
    color: var(--text-muted);
  }

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0%;
    color: var(--text-body);
  }
`;

const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 100%;

  svg {
    width: 32px;
    height: 32px;
    color: var(--text-muted);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: var(--text-body);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  small {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0%;
    color: var(--text-muted);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: var(--text-heading);
  }

  .arkynBadge {
    margin-top: 4px;
  }
`;

export { Container, EmptyContent, Header, TextContent };
