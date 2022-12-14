import { Container, Options } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { FaBars } from 'react-icons/fa';
import { HeaderProps } from './interfaces';
import IconBtn from '../IconBtn';
import Nav from './Nav';
import { RootState } from '@/redux/rootReducer';
import SOPLogo from '@/public/images/sop_logo.svg';
import { toggleMenu } from '@/redux/Session/actions';

const Header = ({ top = true }: HeaderProps) => {
  const dispatch = useDispatch();
  const { pageName } = useSelector((store: RootState) => store.Session);

  return (
    <Container top={top}>
      <Options>
        <IconBtn
          size={'xs'}
          variant="transparent"
          name={'Menu Hamburguer'}
          title={'Menu Hamburguer'}
          onClick={() => dispatch(toggleMenu())}
        >
          <FaBars size={24} />
        </IconBtn>
        {pageName === 'Dashboard' ? <SOPLogo /> : <h1>{pageName}</h1>}
      </Options>
      <Nav />
    </Container>
  );
};

export default Header;
