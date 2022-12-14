import { useEffect, useState } from 'react';

import { Container } from './styles';
import Item from './Item';
import { RootState } from '@/redux/rootReducer';
import { SectionProps } from './interfaces';
import useNavigatorOnLine from '@/hooks/useNavigatorOnline';
import { useSelector } from 'react-redux';

const Section = ({ section }: SectionProps) => {
  const isOnline = useNavigatorOnLine();
  const { isMenuHidden, networkError } = useSelector(
    (store: RootState) => store.Session
  );
  const { roles: userRoles } = useSelector((store: RootState) => store.User);
  const [isSectionAuthorized, setIsSectionAuthorized] = useState(false);
  const [isOfflineAuthorized, setIsOfflineAuthorized] = useState(false);
  const {
    name,
    sectionIcon,
    pages,
    roles: sectionRoles = [],
    offline: sectionOffline,
  } = section;

  useEffect(() => {
    if (!sectionRoles.length) {
      setIsSectionAuthorized(true);
    } else {
      let isOk = false;
      sectionRoles.forEach((r) => {
        if (userRoles.includes(r)) {
          isOk = true;
        }
      });
      setIsSectionAuthorized(isOk);
    }
  }, [userRoles]);

  useEffect(() => {
    if (isOnline && !networkError) {
      setIsOfflineAuthorized(true);
    } else {
      if (sectionOffline) {
        setIsOfflineAuthorized(true);
      } else {
        setIsOfflineAuthorized(false);
      }
    }
  }, [isOnline, networkError]);

  return (
    <>
      {isSectionAuthorized && isOfflineAuthorized ? (
        <Container isMenuHidden={isMenuHidden}>
          <Item name={name} icon={sectionIcon} type="section" />
          {pages.map((page, index) => {
            const { name, link, icon, onMenu, roles = [], offline } = page;
            let isAuthorized = false;
            if (!roles.length) {
              isAuthorized = true;
            } else {
              roles.forEach((r) => {
                if (!isAuthorized && userRoles.includes(r)) {
                  isAuthorized = true;
                }
              });
            }

            if ((!isOnline || networkError) && !offline) {
              isAuthorized = false;
            }

            if (onMenu && isAuthorized) {
              return <Item key={index} name={name} link={link} icon={icon} />;
            }
          })}
        </Container>
      ) : null}
    </>
  );
};

export default Section;
