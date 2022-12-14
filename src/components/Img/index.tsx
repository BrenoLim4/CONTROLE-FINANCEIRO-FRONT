import Image from 'next/image';
import { ImgProps } from './interfaces';

const Img = (props: ImgProps) => {
  const { src, alt, width, height } = props;

  if (typeof src === 'string') {
    return width && height ? (
      <Image
        placeholder="blur"
        width={width}
        height={height}
        alt={alt}
        src={src}
      />
    ) : (
      <Image placeholder="blur" layout={'fill'} alt={alt} src={src} />
    );
  } else {
    return <Image {...props} placeholder="blur" alt={alt} src={src} />;
  }
};

export default Img;
