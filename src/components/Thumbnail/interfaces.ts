import { StaticImageData } from 'next/image';

export interface ThumbnailProps {
  fit?: 'contain' | 'cover';
  src: string | StaticImageData;
  title?: string;
  alt?: string;
  link?: string;
  onClick?: (any) => any;
  blur?: boolean;
  loading?: boolean;
}
