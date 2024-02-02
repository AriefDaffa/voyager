import type { FC, ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
}

const Alert: FC<AlertProps> = ({ children }) => {
  return (
    <div className="rounded-lg border border-red-600 bg-red-300 p-4 text-center text-sm text-red-600">
      {children}
    </div>
  );
};

export default Alert;
