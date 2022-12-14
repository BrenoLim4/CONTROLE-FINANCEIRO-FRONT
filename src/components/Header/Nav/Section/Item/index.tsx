import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { ItemProps } from './interfaces';
import Link from 'next/link';
import { RootState } from '@/redux/rootReducer';
import { toggleMenu } from '@/redux/Session/actions';
import useNavigatorOnLine from '@/hooks/useNavigatorOnline';

const Item = ({ name, link, icon: Icon, type = 'page' }: ItemProps) => {
  const dispatch = useDispatch();
  const { isMenuHidden } = useSelector((store: RootState) => store.Session);
  const { hasConnectedToServer } = useSelector(
    (store: RootState) => store.User
  );
  const isOnline = useNavigatorOnLine();
  return (
    <Container
      isMenuHidden={isMenuHidden}
      onClick={
        link && isOnline && hasConnectedToServer && !isMenuHidden
          ? () => dispatch(toggleMenu())
          : () => null
      }
      as={type === 'module' ? 'div' : 'li'}
      type={type}
    >
      {link && !isMenuHidden ? (
        <Link href={link} passHref>
          <Icon />
          {!isMenuHidden ? <p>{name}</p> : null}
        </Link>
      ) : (
        <>
          <Icon />
          {!isMenuHidden ? <p>{name}</p> : null}
        </>
      )}
    </Container>
  );
};

export default Item;
