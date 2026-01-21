import { styled } from "@linaria/react";
import { Form } from "react-router";
import { screenBreakpoints } from "~/client/themes/screenBreakpoints";

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 762px;
  margin: 0 auto;
  padding: 24px 0;
  gap: 24px;

  .headerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;
    margin-bottom: 48px;

    strong {
      font-weight: 600;
      font-size: 24px;
      color: var(--text-heading);
      text-align: center;
    }

    p {
      font-weight: 400;
      font-size: 18px;
      color: var(--text-muted);
      text-align: center;
      line-height: 130%;
    }
  }

  @media (max-width: 830px) {
    width: 100vw;
    max-width: unset;
    padding: unset;
    gap: unset;
  }

  /* ${screenBreakpoints.sm} {
    width: 100vw;
    padding: unset;
    gap: 6px;
  } */
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 762px;
  height: 100%;
  max-height: 380px;
  border-radius: 8px;

  @media (max-width: 830px) {
    width: 100vw;
    max-width: unset;
    border-radius: unset;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffff;

  padding: 24px;
  border-radius: 12px;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-heading);
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-body);
    line-height: 20px;
  }

  @media (max-width: 830px) {
    width: 100vw;
    padding: 24px;

    margin-top: -16px;
    border-radius: 12px 12px 0 0;
  }

  ${screenBreakpoints.xxs} {
    padding: 16px;
  }
`;

const AudioContent = styled.div`
  border: 1px solid var(--border);
  padding: 16px;
  border-radius: 6px;
  width: 100%;

  .arkynSliderTrack {
    max-width: unset;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  border: none;
  background: rgb(var(--spotlight-primary));
  color: rgb(var(--spotlight-secondary));
  display: grid;
  place-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 500px) {
    right: 16px;
    bottom: 16px;
    width: 56px;
    height: 56px;
  }
`;

const ButtonDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 762px;

  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-heading);
  }

  .arkynSliderTrack {
    max-width: unset;
  }
`;

export {
  PageContainer,
  ItemImage,
  ItemInfo,
  AudioContent,
  FloatingButton,
  ButtonDrawerContent,
};
