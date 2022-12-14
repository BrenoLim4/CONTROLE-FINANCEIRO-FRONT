import { Container, Info, Mask, Module, Options, Sections } from './styles';
import { getLoginBaseUrl, hasNotification } from '../../../api/utils';
import { startLogout, toggleMenu } from '@/redux/Session/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Btn from '@/components/Btn/index';
import Item from './Section/Item';
import NotificationController from './NotificationController';
import { RootState } from '@/redux/rootReducer';
import SOPLogo from '@/public/images/sop_logo.svg';
import Section from './Section';
import getConfig from 'next/config';
import { isIOS } from 'react-device-detect';
import useNavigatorOnLine from '@/hooks/useNavigatorOnline';
import { useRouter } from 'next/router';
import useScrollPercentage from '@/hooks/useScrollPercentage';
import useWindowSize from '@/hooks/useWindowSize';

const Nav = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const isOnline = useNavigatorOnLine();
  const { publicRuntimeConfig } = getConfig();
  const { isDesktop, height } = useWindowSize();
  const [scrollRef, scrollPercentage] = useScrollPercentage();
  const [scrollVisible, setScrollVisible] = useState(false);
  const { isMenuHidden, token, networkError } = useSelector(
    (store: RootState) => store.Session
  );
  const { nomeCompleto, usuario } = useSelector(
    (store: RootState) => store.User
  );
  const { sections, moduleName, moduleIcon } = useSelector(
    (store: RootState) => store.Modulo
  );

  useEffect(() => {
    const scrollContainer: any = document.querySelector('#menuItems');
    if (scrollContainer) {
      scrollContainer.scrollHeight <= scrollContainer.offsetHeight
        ? setScrollVisible(false)
        : setScrollVisible(true);
    }
  }, [isMenuHidden]);

  const handleMouseEnter = () => {
    isDesktop && isMenuHidden && dispatch(toggleMenu());
  };

  const handleMouseLeave = () => {
    isDesktop && !isMenuHidden && dispatch(toggleMenu());
  };

  const handleBackClick = () => {
    push(getLoginBaseUrl());
  };

  const handleExitClick = () => {
    dispatch(startLogout(token));
  };

  return (
    <Container height={height} isMenuHidden={isMenuHidden}>
      <Module onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Info isMenuHidden={isMenuHidden}>
          {!isMenuHidden && <SOPLogo />}
          <Item name={moduleName} icon={moduleIcon} type={'module'} link="/" />
        </Info>
        <Sections
          id={'menuItems'}
          scrollVisible={scrollVisible}
          scrollPercentage={scrollPercentage}
          ref={scrollRef}
          isMenuHidden={isMenuHidden}
        >
          {sections?.map((section, index) => {
            return <Section key={index} section={section} />;
          })}
        </Sections>
        <Options
          isMenuHidden={isMenuHidden}
          isOnline={isOnline && !networkError}
        >
          <p>
            {nomeCompleto} - {usuario}
          </p>
          <p style={{ padding: '0' }}>Versão: {publicRuntimeConfig?.version}</p>
          {isOnline && !networkError ? (
            <div>
              <Btn onClick={handleBackClick}>Voltar</Btn>
              {hasNotification() && !isIOS ? <NotificationController /> : null}
              <Btn onClick={handleExitClick}>Sair</Btn>
            </div>
          ) : null}
        </Options>
      </Module>
      <Mask visible={!isMenuHidden} onClick={() => dispatch(toggleMenu())} />
    </Container>
  );
};

export default Nav;
