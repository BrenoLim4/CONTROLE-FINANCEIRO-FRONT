import {
  CardProps as MCardProps,
  CardSectionProps as MCardSectionProps,
  MenuItemProps as MMenuItemProps,
} from '@mantine/core';

export interface CardProps extends MCardProps {
  title?: string;
  // className?: string;
  // fontColor?: string;
  // fontHoverColor?: string;
  // backgroundColor?: string;
  // backgroundHoverColor?: string;
  // round?: boolean;
  // disabled?: boolean;
  // clicked?: (any) => void;
  // full?: boolean;
  icon?: any;
  // block?: boolean;
  // type?: 'submit' | 'button';
  // noMargin?: boolean;
  loading?: boolean;
  // fontSize?: string;
  form?: boolean;
  menuItens?: MenuItemProps[];
}

export interface MenuItemProps extends MMenuItemProps {
  link?: string;
  onClick?: (...any) => any | void;
}

export type CardSectionProps = MCardSectionProps;
