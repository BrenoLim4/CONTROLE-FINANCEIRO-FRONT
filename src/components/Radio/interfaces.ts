import { RadioGroupProps as MRadioGoupProps, RadioProps } from '@mantine/core';

import { ReactNode } from 'react';

export interface RadioGoupProps extends Omit<MRadioGoupProps, 'children'> {
  setValue?: (value: any) => void;
  loading?: boolean;
  center?: boolean;
  items?: ItemProps[];
  children?: ReactNode;
}

export type ItemProps = RadioProps;
