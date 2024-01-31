import type { FC, ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  return <div className={`text-3xl font-bold ${className}`}>{children}</div>;
};

export default Header;
