import { ButtonProps } from '@mantine/core';

export interface BtnProps extends ButtonProps {
  name?: string;
  linkPath?: string;
  title?: string;
  onClick?: (any) => void;
  template?: 'primary' | 'secondary' | 'gradient';
  shadow?: boolean;
}
