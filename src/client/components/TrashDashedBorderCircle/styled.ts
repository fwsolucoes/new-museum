import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .dashedBorderCircle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: 120px;
    height: 120px;

    padding: 15px;

    background-color: var(--card-foreground-primary);

    border: 1px dashed var(--border);

    .filledCircle {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 90px;
      height: 90px;

      border-radius: 50%;

      background-color: rgb(var(--spotlight-danger));

      svg {
        stroke: white;
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export { Container };
