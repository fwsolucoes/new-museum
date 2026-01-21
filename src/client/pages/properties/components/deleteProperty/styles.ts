import { styled } from "@linaria/react";

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  gap: 24px;
  width: 490px;

  svg {
    height: 56px;
    width: 56px;
    color: rgb(var(--spotlight-danger));
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0%;
    text-align: center;
    color: var(--text-body);
  }
`;

export { ModalContent };
