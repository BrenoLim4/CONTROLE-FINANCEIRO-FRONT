import { ContainerProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled.li<ContainerProps>`
  height: 50px;

  transform-origin: ${({ isMenuHidden, type }) =>
    isMenuHidden ? 'center' : type === 'module' ? 'center' : 'center left'};
  transform: ${({ type }) => (type === 'section' ? 'scale(1)' : 'scale(0.9)')};
  transition: ${defaultTransition};

  &:hover {
    transform: scale(1);
  }

  &,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 24px;
    padding: 0;
    transform: ${({ type }) => (type === 'module' ? 'scale(1.4)' : 'scale(1)')};
  }

  /* figure {
    display: flex;
    justify-content: center;
    align-items: center;

    transform: ${({ type }) => (type === 'module' ? 'scale(1.4)' : 'scale(1)')};
  } */

  p {
    margin: 0 0 0 0.75rem;
    text-transform: ${({ type }) =>
      type === 'module' ? 'uppercase' : 'normal'};
    font-family: ${({ type }) => (type === 'module' ? 'Soleto' : 'inherit')};
    font-size: ${({ type }) =>
      type === 'module'
        ? '1.25rem'
        : type === 'section'
        ? '.875rem'
        : '.75rem'};
    font-weight: ${({ type }) => (type === 'page' ? '500' : '700')};
    color: ${({ theme }) => theme.colors.dark[4]};
  }
`;

export { Container };
