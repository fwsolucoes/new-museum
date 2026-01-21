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
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  img {
    width: 260px;
    height: 156px;
    opacity: 1;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    grid-column: span 3;

    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0%;
      color: var(--text-heading);
      margin-bottom: 8px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: var(--text-body);
    }

    p.fullAddress {
      display: flex;
      align-items: center;
      gap: 6px;

      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0%;
      color: var(--text-body);
      margin-top: 24px;

      svg {
        width: 16px;
        height: 16px;
        color: var(--text-body);
      }
    }
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  > div {
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
  }
`;

export { Container, Header, Footer };
