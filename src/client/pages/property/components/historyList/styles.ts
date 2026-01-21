import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background-color: var(--background-foreground);

  border: 1px solid var(--border);
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0%;
    color: var(--text-heading);
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  list-style: none;
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

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: rgb(var(--spotlight-secondary));

  border: 1px solid var(--border);
  border-radius: 8px;

  padding: 24px;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > strong {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: var(--text-heading);
      font-weight: 600;
    }

    > small {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0%;
      color: var(--text-muted);
    }
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    color: var(--text-body);
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: var(--text-muted);
  }
`;

export { Container, Header, List, ListItem, EmptyContent, FooterContainer };
