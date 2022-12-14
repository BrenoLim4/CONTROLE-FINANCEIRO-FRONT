import { InputBaseProps } from '@mantine/core';

export interface NumberInputProps extends InputBaseProps {
  value?: any;
  setValue?: (value: any) => void;
  placeholder?: string;
  loading?: boolean;
  mask?: string;
  maskChar?: string;
  formatChars?: Record<string, unknown>;
}
