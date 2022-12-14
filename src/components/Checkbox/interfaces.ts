import {
  CheckboxProps,
  CheckboxGroupProps as MCheckboxGoupProps,
} from '@mantine/core';

import { ReactNode } from 'react';

export interface CheckboxGoupProps
  extends Omit<MCheckboxGoupProps, 'children'> {
  setValue?: (value: any) => void;
  loading?: boolean;
  center?: boolean;
  items?: ItemProps[];
  children?: ReactNode;
}

export type ItemProps = CheckboxProps;
