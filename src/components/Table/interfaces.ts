import { DataTableProps } from 'mantine-datatable';

export type TableProps<T> = DataTableProps<T> & {
  loading?: boolean;
  apiEndpoint?: string;
  sortColumnsChange?: any;
  sortColumns?: SortColumn[];
};

export interface SortColumn {
  property: string;
  direction: 'ASC' | 'DESC';
}
