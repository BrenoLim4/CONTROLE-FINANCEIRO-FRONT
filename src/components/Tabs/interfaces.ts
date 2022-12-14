import { TabsProps as MTabsProps, TabProps } from '@mantine/core';

import { ReactNode } from 'react';

export interface TabsProps extends Omit<MTabsProps, 'children'> {
  items?: Item[];
  children?: ReactNode;
  loading?: boolean;
}

export interface Item extends Omit<TabProps, 'value'> {
  content?: ReactNode;
  label?: string;
  loading?: boolean;
  value?: string;
}
