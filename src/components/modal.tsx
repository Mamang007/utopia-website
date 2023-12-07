import { useRef } from "react";

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  closeOnClickOut?: boolean;
  children: React.ReactNode; // Add this line
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  onClose,
  closeOnClickOut = true,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === modalRef.current && closeOnClickOut) {
      if (onClose) {
        onClose();
      }
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleCloseModal}
      className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black backdrop-blur-sm z-50 flex justify-center items-center ease-in"
    >
      {children}
    </div>
  );
};

export default Modal;
