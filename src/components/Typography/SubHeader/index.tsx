import type { FC, ReactNode } from 'react';

interface SubHeaderProps {
  children: ReactNode;
}

const SubHeader: FC<SubHeaderProps> = ({ children }) => {
  return <div className="text-sm text-gray-500">{children}</div>;
};

export default SubHeader;
