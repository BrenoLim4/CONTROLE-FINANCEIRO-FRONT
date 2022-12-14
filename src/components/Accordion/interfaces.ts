import {
  AccordionControlProps as MAccordionControlProps,
  AccordionItemProps as MAccordionItemProps,
} from '@mantine/core';

export interface AccordionProps extends MAccordionItemProps {
  title?: string;
  icon?: any;
  loading?: boolean;
}

export interface AccordionControlProps extends MAccordionControlProps {
  closed?: boolean;
}
