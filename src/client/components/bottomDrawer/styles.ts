import { styled } from "@linaria/react";

const DrawerRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  .drawer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .drawer-content-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    max-height: 90vh;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.15);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow-y: auto;
    animation: slideUp 0.25s ease-out;
    padding: 16px;
    touch-action: pan-y; // permite interações dos componentes filhos (como AudioPlayer)
  }

  .drawer-handle {
    width: 36px;
    height: 4px;
    background: #ccc;
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export { DrawerRoot };
