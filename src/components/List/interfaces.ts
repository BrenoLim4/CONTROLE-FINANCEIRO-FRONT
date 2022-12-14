export interface ListProps {
  items: any[] | undefined;
  itemBody: (item: any, index?: any) => any;
  emptyList?: any;
  useListItem?: boolean;
  noContainer?: boolean;
  itemLinkPath?: (item: any, index?: any) => string;
  shadow?: boolean;
}
