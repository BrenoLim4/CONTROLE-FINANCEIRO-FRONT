import Container from './styles';
import { RootState } from '@/redux/rootReducer';
import useNavigatorOnLine from '@/hooks/useNavigatorOnline';
import { useSelector } from 'react-redux';

const OfflineWarn = () => {
  const { networkError } = useSelector((store: RootState) => store.Session);

  const isOnline = useNavigatorOnLine();

  return (
    <Container isOnline={isOnline && !networkError}>
      <p>Modo Offline</p>
    </Container>
  );
};

export default OfflineWarn;
