export interface GalleryProps {
  items?: DefaultItem[]; // adicionar novos tipos
}

export interface DefaultItem {
  width?: string;
  height?: string;
  src: string;
  alt: string;
}
