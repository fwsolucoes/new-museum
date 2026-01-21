import { styled } from "@linaria/react";

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 24px;
  width: 490px;

  .status {
    display: flex;
    align-items: center;
    width: 140px;
    gap: 10px;
  }
`;

export { ModalContent };
