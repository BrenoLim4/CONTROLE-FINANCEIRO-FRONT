import { TextareaProps as MTextareaProps } from '@mantine/core';

export interface TextareaProps extends MTextareaProps {
  value?: any;
  setValue?: (value: any) => void;
  loading?: boolean;
}
