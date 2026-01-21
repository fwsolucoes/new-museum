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
  justify-content: space-between;
  gap: 8px;

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0%;
    color: var(--text-body);
  }
`;

const SummaryCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 8px;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;
    border-radius: 50%;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  &.success {
    .image {
      background-color: rgba(var(--spotlight-success), 0.1);
      svg {
        color: rgb(var(--spotlight-success));
      }
    }
  }

  &.danger {
    .image {
      background-color: rgba(var(--spotlight-danger), 0.1);
      svg {
        color: rgb(var(--spotlight-danger));
      }
    }
  }

  &.info {
    .image {
      background-color: rgba(var(--spotlight-info), 0.1);
      svg {
        color: rgb(var(--spotlight-info));
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0%;
      color: var(--text-muted);
    }

    strong {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0%;
      color: var(--text-heading);
    }
  }
`;

export { Container, Header, SummaryCard };
