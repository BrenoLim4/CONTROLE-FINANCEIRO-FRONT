import { customScroll, defaultTransition } from '@/styles/theme';

import { Textarea } from '@mantine/core';
import styled from '@emotion/styled';

const Container = styled(Textarea)`
  transition: ${defaultTransition};

  label {
    margin-left: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark[4]};
  }

  > div {
    textarea {
      border-color: ${({ theme }) => theme.colors.dark[0]};
      border-radius: 8px;
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

      ${({ theme }) => customScroll(theme)};
    }
  }

  .mantine-InputWrapper-error {
    margin-left: 0.5rem;
    font-weight: 500;
  }
`;

export { Container };
