import type { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
  return <div className={`text-xl font-bold ${className}`}>{children}</div>;
};

export default Title;
