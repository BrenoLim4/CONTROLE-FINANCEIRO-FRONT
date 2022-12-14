import { Carousel } from '@mantine/carousel';
import { SlideProps } from './interfaces';
import styled from '@emotion/styled';

const Container = styled(Carousel)`
  min-height: 400px;
  max-height: 500px;
  height: 50vw;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};

  .mantine-Carousel-viewport,
  .mantine-Carousel-container {
    height: inherit;
    min-height: inherit;
    max-height: inherit;
  }
`;

const Slide = styled(Carousel.Slide)<SlideProps>`
  height: auto;
  background-color: ${({ theme }) => theme.colors.gray[4]};

  > img {
    object-position: center;
    object-fit: ${({ fit }) => fit || 'fill'};
  }
`;

export { Container, Slide };
