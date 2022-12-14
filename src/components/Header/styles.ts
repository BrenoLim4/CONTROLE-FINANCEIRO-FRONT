import { defaultTransition, onDesktop } from '@/styles/theme';

import { HeaderProps } from './interfaces';
import styled from '@emotion/styled';

const Container = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  z-index: 11;

  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;

  box-shadow: ${({ top, theme }) => (top ? 'none' : theme.shadows.lg)};
  transition: ${defaultTransition};

  ${({ theme }) => onDesktop(theme)} {
    padding-left: 3.75rem;
  }
`;

const Options = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  img,
  > svg {
    width: 100%;
    max-width: 200px !important;

    ${({ theme }) => onDesktop(theme)} {
      max-width: 300px !important;
    }
  }

  button {
    display: flex;

    margin: 0 5%;
    color: ${({ theme }) => theme.colors.green[8]};
    transition: ${defaultTransition};

    &,
    &:active {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.green[9]};
    }

    &:active {
      transform: translateY(-50%) scale(1.25);
    }

    ${({ theme }) => onDesktop(theme)} {
      display: none;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.green[8]};
    font-size: 1.375rem;
  }
`;

export { Container, Options };
