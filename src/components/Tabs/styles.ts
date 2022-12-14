import { Tabs } from '@mantine/core';
import { TabsProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(Tabs)<TabsProps>`
  border-radius: 8px;
  transition: ${defaultTransition};
`;

const List = styled(Tabs.List)`
  border: none;
  border-radius: inherit;
  transition: ${defaultTransition};
`;

const Tab = styled(Tabs.Tab)`
  padding: 0.5rem 0.75rem;
  border: none;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background: ${({ theme }) => theme.colors.gray[2]};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark[4]};
  transition: ${defaultTransition};

  &:not(:first-of-type) {
    margin-left: 0.125rem;
  }

  &[aria-selected='true'] {
    background: ${({ theme }) =>
      theme.fn.linearGradient(
        45,
        theme.colors.green[9],
        theme.colors.green[8]
      )};
    color: whitesmoke !important;
  }

  &::before {
    display: none;
  }
`;

const Panel = styled(Tabs.Panel)`
  position: relative;
  transition: ${defaultTransition};
  padding: ${({ theme }) => theme.spacing.xs}px;
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export { Container, List, Tab, Panel };
