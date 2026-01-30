import { styled } from "@linaria/react";
import { Form } from "react-router";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  padding: 32px;

  border: solid 1px var(--border);
  border-radius: 8px;
  background-color: var(--background-foreground);
`;

const CaptionContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  > :first-child {
    min-width: 480px;
  }

  > :last-child {
    min-width: 208px;
  }
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

const NameTd = styled.td`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ActionTh = styled.th`
  text-align: center !important;
`;

const ActionTd = styled.td`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const EmptyImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--background);

  svg {
    color: rgb(var(--spotlight-primary));
    width: 20px;
    height: 20px;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: var(--text-muted);
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    p {
      text-align: center;
    }
  }
`;

export {
  CaptionContainer,
  Container,
  EmptyImage,
  FooterContainer,
  ItemImage,
  NameTd,
  ActionTd,
  ActionTh,
};
