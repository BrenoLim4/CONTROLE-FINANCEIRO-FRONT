import { Checkbox } from '@mantine/core';
import { CheckboxGoupProps } from './interfaces';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(Checkbox.Group)<CheckboxGoupProps>`
  .mantine-CheckboxGroup-label {
    margin-left: 0.5rem;

    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark[4]};
  }

  .mantine-CheckboxGroup {
    &-error {
      font-weight: 500;
      margin-left: 0.5rem;
    }

    &-description {
      margin-left: 0.5rem;
    }
  }
`;

const Item = styled(Checkbox)`
  transition: ${defaultTransition};

  .mantine-Checkbox-labelWrapper {
    display: flex;
    flex-direction: column;

    label {
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.dark[4]};
    }
  }

  > div {
    input {
      cursor: pointer;
      border-radius: 6px;
      border-color: ${({ theme }) => theme.colors.dark[0]};
      background-color: ${({ theme }) => theme.colors.gray[2]};
      transition: ${defaultTransition};

      font-size: 1.125rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.dark[4]};

      &:checked {
        border-color: ${({ theme }) => theme.colors.green[8]};
        background-color: ${({ theme }) => theme.colors.green[8]};
      }
    }
  }
`;

export { Container, Item };
