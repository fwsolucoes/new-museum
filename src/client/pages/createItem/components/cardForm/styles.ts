import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;

  border: solid 1px var(--border);
  border-radius: 8px;
  background-color: var(--background-foreground);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 634px;

  .arkynImageUpload {
    max-height: 255px;
    max-width: 340px;
  }

  .inputImageInfo {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 12px;
    color: var(--text-body);

    margin-top: -16px;
  }

  .arkynAudioUpload {
    max-height: 255px;
    max-width: 340px;
  }

  .inputAudioInfo {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 12px;
    color: var(--text-body);
  }
`;

const AudioComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .content {
    border: solid 1px var(--border);
    border-radius: 6px;

    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    .audioField {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;

      .arkynAudioUpload {
        max-width: 634px;
      }
    }

    .arkynTabButton {
      font-size: 14px;
    }
  }
`;

export { Container, FormContainer, AudioComponent };
