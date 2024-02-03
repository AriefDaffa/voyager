import { ReactNode } from 'react';

export interface DropdownMenu {
  id: number;
  buttonType: string;
  name: ReactNode;
  Icon: ReactNode;
  onClick: () => void;
}
