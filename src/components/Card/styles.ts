import { Card, createPolymorphicComponent } from '@mantine/core';

import { CardProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const _Container = styled(Card)`
  transition: ${defaultTransition};
  color: ${({ theme }) => theme.colors.dark[4]};
  border: none;
  overflow: visible;

  > div {
    &:first-of-type {
      background: ${({ theme }) =>
        theme.fn.linearGradient(
          45,
          theme.colors.green[9],
          theme.colors.green[8]
        )};
      color: whitesmoke !important;
      border: none;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-of-type {
      border: 1px solid ${({ theme }) => theme.colors.gray[3]};
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }
`;
const Container = createPolymorphicComponent<'div', CardProps>(_Container);

export { Container };
