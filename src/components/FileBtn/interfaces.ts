export interface FileBtnProps {
  loading?: boolean;
  setValue?: (value: File | File[]) => void;
  template?: 'primary' | 'secondary' | 'gradient';
  shadow?: boolean;
  fullWidth?: boolean;
  multiple?: boolean;
  accept?: string;
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
  variant?:
    | 'gradient'
    | 'filled'
    | 'default'
    | 'outline'
    | 'light'
    | 'white'
    | 'subtle';
}
