import type { FC, ReactNode } from 'react';

interface ToastProps {
  children: ReactNode;
  type: 'warning' | 'success' | string;
}

const Toast: FC<ToastProps> = ({ children, type }) => {
  return (
    <div
      className={` p-4 rounded-lg font-medium border  ${
        type === 'warning'
          ? 'bg-red-300 border-red-600 text-red-800'
          : 'bg-green-300 border-green-600 text-green-800'
      }`}
    >
      {children}
    </div>
  );
};

export default Toast;
