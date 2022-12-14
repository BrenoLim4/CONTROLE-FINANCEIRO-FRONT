import Carousel from '../Carousel';
import { GalleryProps } from './interfaces';
import Img from '../Img';
import Modal from '../Modal';
import { Row } from '../Row';
import Thumbnail from '../Thumbnail';
import { useState } from 'react';

const Gallery = ({ items }: GalleryProps) => {
  const [opened, setOpened] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const handleThumbnailClick = (index) => {
    setInitialSlide(index);
    setOpened(true);
  };

  return (
    <Row position={'center'}>
      {items?.map((i, index) => (
        <Thumbnail
          key={index}
          src={i.src}
          alt={i.alt}
          onClick={() => handleThumbnailClick(index)}
        />
      ))}
      <Modal
        transitionDuration={200}
        size={'100%'}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Carousel fit="cover" initialSlide={initialSlide}>
          {items.map((i, index) => (
            <Img fill={false} key={index} src={i.src} alt={i.alt} />
          ))}
        </Carousel>
      </Modal>
    </Row>
  );
};

export default Gallery;
