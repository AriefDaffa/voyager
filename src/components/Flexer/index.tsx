import type { FC, ReactNode } from 'react';

interface FlexerProps {
  children: ReactNode;
  className?: string;
  flexDirection?: 'row' | 'col';
  onClick?: () => void;
}

const Flexer: FC<FlexerProps> = ({
  children,
  className,
  flexDirection = 'row',
  onClick = () => {},
}) => {
  return (
    <div
      className={`flex ${
        flexDirection === 'row' ? 'flex-row' : 'flex-col'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flexer;
