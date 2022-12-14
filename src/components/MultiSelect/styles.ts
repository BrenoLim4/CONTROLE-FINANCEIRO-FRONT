import { customScroll, defaultTransition } from '@/styles/theme';

import { MultiSelect } from '@mantine/core';
import styled from '@emotion/styled';

const Container = styled(MultiSelect)`
  transition: ${defaultTransition};

  label {
    margin-left: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark[4]};
  }

  > .mantine-MultiSelect-wrapper {
    min-height: 45px;

    transition: ${defaultTransition};

    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark[4]};

    > div {
      min-height: 45px;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.dark[0]};
      border-bottom: 2px solid ${({ theme }) => theme.colors.dark[2]};
      background-color: ${({ theme }) => theme.colors.gray[2]};

      &:focus-within {
        border-color: ${({ theme }) => theme.colors.dark[0]};
        border-bottom-color: ${({ theme }) => theme.colors.green[8]};
      }

      > div {
        min-height: inherit;
        border-radius: inherit;
        border: none;
        background-color: transparent;

        &:first-of-type {
          > .mantine-MultiSelect-values {
            min-height: 100%;
            height: 100%;

            .mantine-MultiSelect-value {
              min-height: 39px;
              background-color: #fff;

              span {
                font-size: 1rem;
              }
            }

            input {
              min-height: 45px;
              height: 100%;
              font-size: 1.125rem;
              font-weight: 500;
              color: ${({ theme }) => theme.colors.dark[4]};

              &::placeholder {
                color: ${({ theme }) => theme.colors.dark[2]};
              }

              &[type='search']::-webkit-search-cancel-button,
              &[type='search']::-webkit-search-decoration {
                -webkit-appearance: none;
                appearance: none;
              }
            }
          }
        }
      }
    }
  }

  .mantine-InputWrapper-error {
    margin-left: 0.5rem;
    font-weight: 500;
  }

  .mantine-MultiSelect-dropdown {
    background-color: ${({ theme }) => theme.colors.gray[2]};

    border: 1px solid ${({ theme }) => theme.colors.dark[0]};
    font-weight: 500;
  }

  .mantine-MultiSelect-itemsWrapper {
    ${({ theme }) => customScroll(theme)};
  }

  .mantine-MultiSelect-item {
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
