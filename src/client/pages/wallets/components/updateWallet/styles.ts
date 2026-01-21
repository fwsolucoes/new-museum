import { styled } from "@linaria/react";

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 24px;
  width: 490px;
`;

const WalletSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 12px;
`;

export { ModalContent, WalletSwitchContainer };
