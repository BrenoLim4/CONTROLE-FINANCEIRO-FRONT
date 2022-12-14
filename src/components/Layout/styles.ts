import { customScroll, defaultTransition, onDesktop } from '@/styles/theme';

import styled from '@emotion/styled';

const Main = styled.main<any>`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 10%;

  width: 100%;
  height: 90%;
  padding-bottom: ${({ isOnline }) => (isOnline ? '0' : '40px')};

  overflow-y: auto;
  overflow-x: hidden;
  transition: ${defaultTransition};

  ${({ theme }) => customScroll(theme)};

  ${({ theme }) => onDesktop(theme)} {
    padding-left: 3.75rem;
  }
`;

export { Main };
