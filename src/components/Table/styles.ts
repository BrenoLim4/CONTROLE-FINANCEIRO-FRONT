import { DataTable } from 'mantine-datatable';
import styled from '@emotion/styled';

const Container = styled(DataTable)`
  height: ${({ minHeight }) => minHeight || 600}px;

  table {
    thead {
      background-color: transparent;
      background: ${({ theme }) =>
        theme.fn.linearGradient(
          45,
          theme.colors.green[9],
          theme.colors.green[8]
        )};

      tr {
        background-color: transparent;
        th {
          padding: ${({ theme }) => theme.spacing.xs}px;

          font-size: ${({ theme }) => theme.fontSizes.lg}px;
          color: ${({ theme }) => theme.colors.gray[0]};
          line-height: 1.35;

          &:hover {
            background: transparent;
          }

          .mantine-Checkbox-root {
            display: flex;
            justify-content: center;
            align-items: center;

            .mantine-Checkbox-icon {
              color: ${({ theme }) => theme.colors.yellow[6]};
            }

            .mantine-Checkbox-input:checked ~ .mantine-Checkbox-icon {
              color: #fff;
            }
          }

          > div {
            > div:nth-of-type(2) {
              display: none;
            }
          }
        }
      }
    }

    tbody {
      tr {
        td {
          padding: ${({ theme }) => theme.spacing.xs}px;
          color: ${({ theme }) => theme.colors.dark[4]};

          .mantine-Checkbox-root {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    position: absolute;
    right: 0;
    cursor: pointer;

    div {
      position: absolute;
      left: 50%;

      font-size: 14px;
      user-select: none;
    }

    &.up {
      div {
        transform: translateY(4px) translateX(-50%);
      }
      svg {
        transform: translateY(-4px) scale(1.2);
      }
    }

    &.down {
      div {
        transform: translateY(-6px) translateX(-50%);
      }
      svg {
        transform: translateY(4px) scale(1.2);
      }
    }
  }
`;

export { Container, ColumnHeader };
