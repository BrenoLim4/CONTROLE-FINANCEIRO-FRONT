import { Children, useState } from 'react';
import { Container, Slide } from './styles';
import { Embla, useAnimationOffsetEffect } from '@mantine/carousel';

import { CarouselProps } from './interfaces';

const Carousel = (props: CarouselProps) => {
  const TRANSITION_DURATION = 200;
  const { children, fit } = props;
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <Container {...props} getEmblaApi={setEmbla}>
      {Children.map(children, (child, index) => (
        <Slide key={index} fit={fit}>
          {child}
        </Slide>
      ))}
    </Container>
  );
};

export default Carousel;
