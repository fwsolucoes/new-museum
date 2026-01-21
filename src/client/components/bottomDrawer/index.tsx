import ReactDOM from "react-dom";
import { DrawerRoot } from "./styles";
import { useEffect, useRef, useState } from "react";

// Drawer que abre de baixo para cima com gesto de arrastar (swipe down para fechar)
type BottomDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

function BottomDrawer({ open, onOpenChange, children }: BottomDrawerProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    startY.current = e.clientY;
    setDragging(true);
    handleRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !contentRef.current) return;

    currentY.current = Math.max(0, e.clientY - startY.current);
    contentRef.current.style.transform = `translateY(${currentY.current}px)`;
  };

  const onPointerUp = () => {
    if (!contentRef.current) return;

    setDragging(false);

    const shouldClose = currentY.current > 60; // Fecha se arrastado mais de 60px

    if (shouldClose) {
      onOpenChange(false);
    } else {
      contentRef.current.style.transition = "transform 0.2s ease-out";
      contentRef.current.style.transform = "translateY(0)";
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transition = "";
        }
      }, 200);
    }

    currentY.current = 0;
  };

  return ReactDOM.createPortal(
    <DrawerRoot>
      <div className="drawer-overlay" onClick={() => onOpenChange(false)} />

      <div ref={contentRef} className="drawer-content-bottom">
        <div
          ref={handleRef}
          className="drawer-handle"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        />
        {children}
      </div>
    </DrawerRoot>,
    document.body,
  );
}

export { BottomDrawer };
