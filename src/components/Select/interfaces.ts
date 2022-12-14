import { SelectProps as MSelectProps } from '@mantine/core';

export interface SelectProps extends MSelectProps {
  setValue?: (value: any) => void;
  loading?: boolean;
}
