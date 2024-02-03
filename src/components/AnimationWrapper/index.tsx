import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { FC, ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
}

const AnimationWrapper: FC<AnimationWrapperProps> = ({ children }) => {
  const [parent] = useAutoAnimate();
  return <div ref={parent}>{children}</div>;
};

export default AnimationWrapper;
