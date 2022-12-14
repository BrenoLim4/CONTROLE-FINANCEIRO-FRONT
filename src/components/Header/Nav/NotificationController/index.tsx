import { IoMdNotifications, IoMdNotificationsOff } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { RootState } from '@/redux/rootReducer';
import { toggleSubscription } from '@/redux/Session/actions';
import { useCallback } from 'react';

const NotificationController = () => {
  const dispatch = useDispatch();
  const { isSubscribed } = useSelector((store: RootState) => store.Session);
  const { usuario } = useSelector((store: RootState) => store.User);

  const handleToggle = useCallback(() => {
    dispatch(toggleSubscription({ isSubscribed, matricula: usuario }));
  }, [isSubscribed, usuario]);

  return (
    <Container isSubscribed={isSubscribed}>
      {isSubscribed ? (
        <IoMdNotifications
          style={{ opacity: usuario ? 1 : 0.75 }}
          onClick={handleToggle}
        />
      ) : (
        <IoMdNotificationsOff
          style={{ opacity: usuario ? 1 : 0.75 }}
          onClick={handleToggle}
        />
      )}
    </Container>
  );
};

export default NotificationController;
