import { styled } from "@linaria/react";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 762px;
  height: 380px;

  background-color: var(--card);

  border: 2px solid var(--border);
  border-radius: 8px;

  svg {
    width: 64px;
    height: 64px;

    color: rgb(var(--spotlight-primary));
  }

  @media (max-width: 830px) {
    width: 100vw;
    max-width: unset;
    border-radius: unset;

    border: unset;
    background-color: var(--card-foreground-secondary);
  }
`;

export { Content };
