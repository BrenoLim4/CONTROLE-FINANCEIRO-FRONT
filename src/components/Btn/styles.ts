import { Button, createPolymorphicComponent } from '@mantine/core';

import { BtnProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const _Container = styled(Button)<BtnProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: ${defaultTransition};

  color: ${({ template, theme }) =>
    template ? 'normal' : theme.colors.gray[8]};
  box-shadow: ${({ theme, shadow }) => (!shadow ? 'none' : theme.shadows.xs)};

  &:disabled {
    border-color: #ced4da;
  }
`;
const Container = createPolymorphicComponent<'button', BtnProps>(_Container);

export { Container };
