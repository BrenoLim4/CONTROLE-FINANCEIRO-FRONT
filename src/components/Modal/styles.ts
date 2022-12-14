import { Modal } from '@mantine/core';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(Modal)`
  .mantine-Modal-modal {
    box-shadow: none;
    padding: 0;
    border-radius: 8px;
    background: transparent;

    .mantine-Modal-header {
      width: 100%;
      padding: ${({ theme }) => theme.spacing.xs}px;
      margin: 0;

      background: ${({ theme }) =>
        theme.fn.linearGradient(
          45,
          theme.colors.green[9],
          theme.colors.green[8]
        )};
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;

      font-size: 1.25rem;
      font-weight: 700;
      color: whitesmoke !important;

      .mantine-Modal-title {
        line-height: 1.35;
      }

      button {
        height: 27px;
        min-height: auto;
        border: none;
        outline: none;
        color: #fff;
        transition: ${defaultTransition};
        transform-origin: center;

        &:hover {
          background-color: ${({ theme }) => theme.colors.dark['2']};
        }
      }
    }

    .mantine-Modal-body {
      padding: ${({ theme, padding }) =>
        padding || padding === 0 || `${theme.spacing.xs}px`};
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
      background-color: #fff;
    }
  }
`;

export { Container };
