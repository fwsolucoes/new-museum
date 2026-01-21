import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  border: 1px solid var(--border);
  border-radius: 8px;

  background-color: var(--background-foreground);

  .iconContainer {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  strong {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: var(--text-heading);

    margin-top: 19px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: var(--text-muted);
  }

  &.total {
    .iconContainer {
      background-color: rgba(var(--spotlight-secondary), 1);
      color: var(--text-body);
    }
  }

  &.rented {
    .iconContainer {
      background-color: rgba(var(--spotlight-success), 0.1);
      color: rgb(var(--spotlight-success));
    }
  }

  &.vacant {
    .iconContainer {
      background-color: rgba(var(--spotlight-info), 0.1);
      color: rgb(var(--spotlight-info));
    }
  }

  &.undergoingRegularization {
    .iconContainer {
      background-color: rgba(var(--spotlight-accent), 0.1);
      color: rgb(var(--spotlight-accent));
    }
  }

  &.legal {
    .iconContainer {
      background-color: rgba(var(--spotlight-warning), 0.1);
      color: rgb(var(--spotlight-warning));
    }
  }

  &.defaulters {
    .iconContainer {
      background-color: rgba(var(--spotlight-danger), 0.1);
      color: rgb(var(--spotlight-danger));
    }
  }
`;

export { Container };
