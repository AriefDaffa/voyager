import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="bg-slate-100">
      <div className={`container max-w-6xl mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
