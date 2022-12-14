import { Accordion } from '@mantine/core';
import { AccordionControlProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(Accordion)`
  transition: ${defaultTransition};
  padding: 0;
  position: relative;
  border-radius: 8px;
  border: none;
`;

const Item = styled(Accordion.Item)`
  transition: ${defaultTransition};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-radius: 8px !important;
  border-color: transparent;
  border: none;
`;

const Control = styled(Accordion.Control)<AccordionControlProps>`
  transition: ${defaultTransition};

  box-shadow: ${({ theme }) => theme.shadows.md};
  border-radius: inherit;
  border-bottom-left-radius: ${({ closed }) =>
    closed ? 'inherit' : '0 !important'};
  border-bottom-right-radius: ${({ closed }) =>
    closed ? 'inherit' : '0 !important'};
  background: ${({ theme }) =>
    theme.fn.linearGradient(45, theme.colors.green[9], theme.colors.green[8])};
  color: whitesmoke !important;
`;

const Panel = styled(Accordion.Panel)`
  transition: ${defaultTransition};
  background-color: #fff;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  line-height: normal;
  border-top-width: 0;

  .mantine-Accordion-content {
    padding: ${({ theme }) => theme.spacing.xs}px;
    border: 1px solid ${({ theme }) => theme.colors.gray[3]};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export { Container, Item, Control, Panel };
