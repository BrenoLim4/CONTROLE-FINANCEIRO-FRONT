import { CarouselSlideProps } from '@mantine/carousel/lib/CarouselSlide/CarouselSlide';
import { CarouselProps as MCarouselProps } from '@mantine/carousel';

export interface CarouselProps extends MCarouselProps {
  fit?: 'contain' | 'cover';
}

export interface SlideProps extends CarouselSlideProps {
  fit?: 'contain' | 'cover';
}
