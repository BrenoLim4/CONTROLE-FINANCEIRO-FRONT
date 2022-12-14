import { useDispatch, useSelector } from 'react-redux';

import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/Header';
import { Main } from './styles';
import OfflineWarn from '../OfflineWarn';
import { Page } from '@/redux/Modulo/interfaces';
import { RootState } from '@/redux/rootReducer';
import { getLoginBaseUrl } from '../../api/utils';
import { startTokenAuthentication } from '@/redux/Session/actions';
import { useEffect } from 'react';
import useNavigatorOnLine from '@/hooks/useNavigatorOnline';
import { useRouter } from 'next/dist/client/router';
import useScrollPercentage from '@/hooks/useScrollPercentage';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { token, networkError } = useSelector(
    (store: RootState) => store.Session
  );
  const { moduleName, sections } = useSelector(
    (store: RootState) => store.Modulo
  );
  const { roles: userRoles } = useSelector((store: RootState) => store.User);
  const [scrollRef, scrollPercentage] = useScrollPercentage();
  const { query, replace, pathname, push } = useRouter();
  const isOnline = useNavigatorOnLine();

  useEffect(() => {
    if (isOnline) {
      if (query?.token) {
        dispatch(
          startTokenAuthentication({ token: query.token, callback: replace })
        );
      } else {
        if (token) {
          dispatch(startTokenAuthentication({ token }));
          getPagePermission(pathname);
        } else if (token === null || token === '' || token === 'null') {
          push(getLoginBaseUrl());
        }
      }
    } else {
      getPagePermission(pathname);
    }
  }, [pathname]);

  const getPagePermission = (pageName) => {
    let pageData: Page = null;
    let permission = false;
    let worksOffline = false;
    sections.forEach(({ pages }) => {
      if (!pageData) {
        pageData = pages.find((p) => p.link === pageName);
      }
    });
    if (pageData?.roles) {
      pageData.roles.length
        ? pageData.roles.forEach((r) => {
            if (!permission && userRoles.includes(r)) {
              permission = true;
            }
          })
        : (permission = true);
    } else {
      permission = true;
    }

    if (pageData?.offline) {
      worksOffline = true;
    }

    if ((!isOnline || networkError) && !worksOffline && pageName !== '/') {
      replace('/_offline');
    } else {
      !permission && replace('/');
    }
  };

  return (
    <>
      <Head>
        <title>{moduleName} - SOP</title>
      </Head>
      <Header top={scrollPercentage === 0} />
      <Main isOnline={isOnline && !networkError} ref={scrollRef}>
        {children}
        <OfflineWarn />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
