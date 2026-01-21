import { styled } from "@linaria/react";
import { screenBreakpoints } from "~/client/themes/screenBreakpoints";

const Content = styled.div`
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
    color: var(--text-body);
  }

  .imageInformation {
    min-width: 100%;
    display: flex;
    justify-content: space-between;

    .arkynImageUpload {
      width: 450px;
      height: 300px;
    }

    .information {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  .footerInformation {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${screenBreakpoints.xl} {
    .imageInformation {
      gap: 24px 0;
      flex-direction: column;

      .information {
        width: 100%;
      }
    }

    .footerInformation {
      width: 100%;
    }
  }
`;

export { Content };
