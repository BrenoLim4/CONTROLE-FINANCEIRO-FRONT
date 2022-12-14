import { ActionIcon, createPolymorphicComponent } from '@mantine/core';

import { IconBtnProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const _Container = styled(ActionIcon)<IconBtnProps>`
  display: inline-flex;
  transition: ${defaultTransition};

  box-shadow: ${({ theme, shadow }) => (!shadow ? 'none' : theme.shadows.xs)};
  width: auto;
  height: auto;

  svg {
    color: inherit;
  }

  &:disabled {
    border-color: #ced4da;
  }
`;
const Container = createPolymorphicComponent<'button', IconBtnProps>(
  _Container
);

export { Container };
