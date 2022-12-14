import { ContainerProps, MaskProps } from './interfaces';
import {
  customScroll,
  defaultTransition,
  invisibleScroll,
  onDesktop,
} from '@/styles/theme';

import styled from '@emotion/styled';

const getBoxShadowMenuItens = ({ scrollPercentage, scrollVisible }) => {
  if (!scrollVisible) return 'none';
  if (scrollPercentage === 0) {
    return 'inset 0px -11px 8px -6px #CCC';
  } else if (scrollPercentage === 100) {
    return 'inset 0px 11px 8px -6px #CCC';
  } else {
    return `
      inset 0px 11px 8px -6px #CCC,
      inset 0px -11px 8px -6px #CCC
    `;
  }
};

const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;

  width: ${({ isMenuHidden }) => (isMenuHidden ? 0 : '16.25rem')};
  height: ${({ height }) => height}px;

  background-color: rgba(255, 255, 255, 0.867);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${defaultTransition};

  ${({ theme }) => onDesktop(theme)} {
    width: ${({ isMenuHidden }) => (isMenuHidden ? '3.75rem' : '16.25rem')};
  }
`;

const Module = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 0;
  bottom: 0;

  width: inherit;

  background-color: rgba(255, 255, 255, 0.867);
`;

const Info = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ isMenuHidden }) => (isMenuHidden ? '100%' : '98%')};
  padding: ${({ isMenuHidden }) => (isMenuHidden ? '0' : '1rem 1rem 0 1rem')};

  transition: ${defaultTransition};
  border-bottom: ${({ isMenuHidden }) => (isMenuHidden ? '0' : '2px')} solid
    ${({ theme }) => theme.colors.green[8]};

  > span:first-of-type img,
  > svg {
    padding-bottom: ${({ isMenuHidden }) =>
      isMenuHidden ? '0' : '1rem'} !important;
    width: 100%;
  }
`;

const Sections = styled.nav<any>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMenuHidden }) =>
    isMenuHidden ? 'center' : 'flex-start'};

  flex-grow: 1;
  padding: 0;

  overflow: hidden scroll;
  transition: ${defaultTransition};
  ${({ isMenuHidden, theme }) =>
    isMenuHidden ? invisibleScroll(theme) : customScroll(theme)};
  box-shadow: ${getBoxShadowMenuItens};
`;

const Options = styled.div<any>`
  display: ${({ isMenuHidden }) => (isMenuHidden ? 'none' : 'flex')};
  flex-direction: column;

  width: 98%;

  border-top: 2px solid ${({ theme }) => theme.colors.green[8]};

  > p {
    margin: 0;
    padding: 1rem 1rem ${({ isOnline }) => (isOnline ? '0' : '1rem')} 1rem;

    text-align: center;
    font-family: 'Soleto';
    font-weight: 400;
  }

  > p:not(:first-of-type) {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 58px;
    padding: 0 2% 0 4%;
  }
`;

const Mask = styled.div<MaskProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;

  width: 100vw;
  background-color: ${({ theme }) => theme.colors.dark[1]};
  opacity: 0.5;
`;

export { Container, Module, Info, Sections, Options, Mask };
