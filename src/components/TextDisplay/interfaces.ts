import { TextProps as MTextProps } from '@mantine/core';

export interface TextProps extends MTextProps {
  label?: string;
  labelColor?: string;
  text?: string;
  textColor?: string;
  weight?: string;
}
