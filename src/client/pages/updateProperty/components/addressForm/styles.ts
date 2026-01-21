import { styled } from "@linaria/react";
import { screenBreakpoints } from "~/client/themes/screenBreakpoints";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 24px;
  padding: 32px;

  border: solid 1px var(--border);
  border-radius: 8px;
  background-color: var(--background-foreground);

  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: var(--text-heading);
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: var(--text-muted);
  }

  .arkynInput {
    max-width: 100%;
  }

  main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 32px;

    .address {
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 32px;

      .addressDetails {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .coordinates {
          display: grid;
          grid-template-columns: 50% 50%;
          gap: 16px;
        }

        .streetAddress {
          display: grid;
          grid-template-columns: 80% 20%;
          gap: 16px;
        }

        .neighborhoodInfo {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 16px;
        }

        .cityState {
          display: grid;
          grid-template-columns: 80% 20%;
          gap: 16px;
        }

        .postalCode {
          width: 50%;
        }
      }
    }

    .arkynMapViewPinnedEmpty,
    .arkynMapViewPinned {
      width: 50%;
      min-width: 300px;
      height: 90%;
      min-height: 430px;
    }
  }

  ${screenBreakpoints.xl} {
    main {
      gap: 24px 0;
      flex-direction: column;

      .address {
        width: 100%;
      }

      .arkynMapViewPinnedEmpty,
      .arkynMapViewPinned {
        width: 100%;
      }
    }
  }

  ${screenBreakpoints.xs} {
    main .address .addressDetails {
      .coordinates,
      .streetAddress,
      .neighborhoodInfo,
      .cityState,
      .postalCode {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export { Content };
