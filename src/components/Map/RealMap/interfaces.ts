export interface MapProps {
  markers?: MarkerProps[];
  markerBody?: (item: MarkerProps) => any;
  initialZoom?: number;
  withMargin?: boolean;
  minHeight?: string;
  showBoundaries?: boolean;
  highlights?: Highlight[];
}

export interface MarkerProps {
  latitude: string | number;
  longitude: string | number;
  descricao?: string;
  descricaoObra?: string;
  horario?: string;
  color?: string;
}

export interface MapEventsProps {
  markers: MarkerProps[];
  highlights: Highlight[];
  showBoundaries: boolean;
}

export interface Highlight {
  query: string;
  color: string;
}
