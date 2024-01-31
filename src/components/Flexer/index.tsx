import type { FC, ReactNode } from 'react';

interface FlexerProps {
  children: ReactNode;
  className?: string;
  flexDirection?: 'row' | 'col';
}

const Flexer: FC<FlexerProps> = ({
  children,
  className,
  flexDirection = 'row',
}) => {
  return (
    <div
      className={`flex ${
        flexDirection === 'row' ? 'flex-row' : 'flex-col'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Flexer;
