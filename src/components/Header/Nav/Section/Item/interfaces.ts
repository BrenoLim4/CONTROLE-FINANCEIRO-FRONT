export interface ItemProps {
  name: string;
  link?: string;
  icon: any;
  type?: 'module' | 'section' | 'page';
}

export interface ContainerProps {
  isMenuHidden?: boolean;
  type?: 'module' | 'section' | 'page';
}
