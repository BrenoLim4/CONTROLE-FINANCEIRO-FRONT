import { PasswordInput } from '@mantine/core';
import { PasswordInputProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(PasswordInput)<PasswordInputProps>`
  transition: ${defaultTransition};

  label {
    margin-left: 0.5rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.dark[4]};
  }

  > div {
    border: none;
    border-radius: 8px;

    > div:first-of-type {
      height: 48px;
      min-height: 48px;
      padding-right: 48px;
      padding-left: 12px;

      border-color: ${({ theme }) => theme.colors.dark[0]};
      background-color: ${({ theme }) => theme.colors.gray[2]};
      border-bottom: 2px solid
        ${({ theme, focused }) =>
          focused ? theme.colors.green[8] : theme.colors.dark[2]};
      border-radius: inherit;
      transition: ${defaultTransition};

      input {
        height: 100%;
        padding-left: inherit;
        transition: ${defaultTransition};

        font-weight: 500;
        color: ${({ theme }) => theme.colors.dark[4]};

        &::placeholder {
          color: ${({ theme }) => theme.colors.dark[2]};
        }
      }
    }

    > div:nth-of-type(2) {
      width: 48px;
    }
  }

  .mantine-InputWrapper-error {
    margin-left: 0.5rem;
    font-weight: 500;
  }
`;

export { Container };
