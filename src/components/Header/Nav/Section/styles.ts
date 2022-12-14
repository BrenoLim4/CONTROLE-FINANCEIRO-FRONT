import { ContainerProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled.ul<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMenuHidden }) =>
    isMenuHidden ? 'center' : 'flex-start'};

  margin: 0;
  padding: ${({ isMenuHidden }) => (isMenuHidden ? '0' : '0 0 0 1rem')};
  width: ${({ isMenuHidden }) => (isMenuHidden ? '70%' : '95%')};

  border-top: 2px solid ${({ theme }) => theme.colors.green[8]};
  transition: ${defaultTransition};

  &:first-of-type {
    border-top: ${({ isMenuHidden, theme }) =>
      isMenuHidden ? `2px solid ${theme.colors.green[8]}` : 'none'};
  }

  li:not(:first-of-type) {
    padding-left: ${({ isMenuHidden }) => (isMenuHidden ? '0' : '0.75rem')};
  }
`;

export { Container };
