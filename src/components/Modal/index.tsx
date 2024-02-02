import type { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <div
      className="absolute w-screen h-screen z-50 top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center overflow-x-hidden"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.384)' }}
      onClick={handleClose}
    >
      <div
        className="z-[60] bg-white w-[500px] rounded-lg p-3"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
