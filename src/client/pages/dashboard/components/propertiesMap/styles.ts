import { styled } from "@linaria/react";

const fadeIn = `
 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-foreground);
  gap: 16px;
  padding: 32px;

  border: 1px solid var(--border);
  border-radius: 8px;

  min-height: 765px;
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0%;
  color: var(--text-body);
`;

const PropertyContainer = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeIn 0.4s ease-in-out;

  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background-color: var(--background-foreground);

  max-width: 251px;

  img {
    width: 227px;
    height: 128px;
    border-radius: 6px;
  }

  strong {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0%;
    color: var(--text-heading);
  }

  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0%;
    color: var(--text-muted);
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > .arkynIconButton {
    margin-left: auto;
  }
`;

export { Container, Header, PropertyContainer };
