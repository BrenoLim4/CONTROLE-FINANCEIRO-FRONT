import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import Img from '../Img';
import Link from 'next/link';
import { ThumbnailProps } from './interfaces';

const Thumbnail = ({
  fit = 'cover',
  src,
  title,
  link,
  onClick,
  alt,
  blur,
  loading,
}: ThumbnailProps) => {
  return (
    <>
      {link ? (
        <Container fit={fit} link={link}>
          <Link href={link}>
            <a title={title}>
              <Img
                width={210}
                height={140}
                src={src}
                alt={alt}
                title={title}
                placeholder={blur ? 'blur' : 'empty'}
                blurDataURL={
                  'data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOs/w8AAgMBgMd74YAAAAAASUVORK5CYII='
                }
              />
            </a>
          </Link>
          <CustomLoader visible={loading} />
        </Container>
      ) : (
        <Container fit={fit} onClick={onClick}>
          <Img
            width={210}
            height={140}
            src={src}
            alt={alt}
            title={title}
            placeholder={blur ? 'blur' : 'empty'}
            blurDataURL={
              'data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOs/w8AAgMBgMd74YAAAAAASUVORK5CYII='
            }
          />
          <CustomLoader visible={loading} />
        </Container>
      )}
    </>
  );
};

export default Thumbnail;
