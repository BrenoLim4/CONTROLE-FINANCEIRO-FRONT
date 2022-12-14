import Link from 'next/link';
import { ListItemContainer } from './styles';

interface Props {
  children: any;
  clicked?: () => void;
  linkPath?: string;
  width?: number;
  shadow?: boolean;
}

const ListItem = ({ children, clicked, width, linkPath, shadow }: Props) => {
  return (
    <>
      {linkPath ? (
        <Link href={linkPath} passHref>
          <ListItemContainer
            width={width}
            shadow={shadow}
            clicked={!!clicked}
            onClick={clicked}
          >
            {children}
          </ListItemContainer>
        </Link>
      ) : (
        <ListItemContainer
          width={width}
          shadow={shadow}
          clicked={!!clicked}
          onClick={clicked}
        >
          {children}
        </ListItemContainer>
      )}
    </>
  );
};

export default ListItem;
