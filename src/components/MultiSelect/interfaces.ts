import { MultiSelectProps as MMultiSelectProps } from '@mantine/core';

export interface MultiSelectProps extends MMultiSelectProps {
  setValue?: (value: any) => void;
  loading?: boolean;
}
