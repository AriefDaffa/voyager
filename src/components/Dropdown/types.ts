import { ReactNode } from 'react';

export interface DropdownMenu {
  id: number;
  name: ReactNode;
  onClick: () => void;
}
