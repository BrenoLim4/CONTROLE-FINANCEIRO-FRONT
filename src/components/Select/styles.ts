import { customScroll, defaultTransition } from '@/styles/theme';

import { Select } from '@mantine/core';
import styled from '@emotion/styled';

const Container = styled(Select)`
  transition: ${defaultTransition};

  label {
    margin-left: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark[4]};
  }

  > div {
    input {
      height: 48px;
      border-radius: 8px;
      border-color: ${({ theme }) => theme.colors.dark[0]};
      border-bottom: 2px solid ${({ theme }) => theme.colors.dark[2]};
      background-color: ${({ theme }) => theme.colors.gray[2]};
      transition: ${defaultTransition};

      font-size: 1.125rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.dark[4]};

      &::placeholder {
        color: ${({ theme }) => theme.colors.dark[2]};
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors.dark[0]};
        border-bottom-color: ${({ theme }) => theme.colors.green[8]};
      }
    }
  }

  .mantine-InputWrapper-error {
    margin-left: 0.5rem;
    font-weight: 500;
  }

  .mantine-Select-dropdown {
    background-color: ${({ theme }) => theme.colors.gray[2]};

    border: 1px solid ${({ theme }) => theme.colors.dark[0]};
    font-weight: 500;
  }

  .mantine-Select-itemsWrapper {
    ${({ theme }) => customScroll(theme)};
  }

  .mantine-Select-item {
    &:not(:first-of-type) {
      margin-top: 0.25rem;
    }

    &[data-selected] {
      background-color: #fff;
      color: ${({ theme }) => theme.colors.dark[4]};
    }
  }
`;

export { Container };
