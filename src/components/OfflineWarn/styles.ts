import { defaultTransition, yellowGradient } from '@/styles/theme';

import styled from '@emotion/styled';

const Container = styled.div<any>`
  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  max-height: ${({ isOnline }) => (!isOnline ? '40px' : '0')};
  width: 100%;

  background: ${({ theme }) => yellowGradient(theme)};
  border-top: ${({ isOnline }) => (isOnline ? '0' : '2px')} solid
    ${({ theme }) => theme.colors.yellow[3]};
  border-radius: 0;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  transition: ${defaultTransition};
  overflow: hidden;
  z-index: 1000;

  p {
    margin: 0;

    line-height: 0;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark[4]};
    transition: ${defaultTransition};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};

    p {
      transform: scale(1.1);
    }
  }
`;

export default Container;
