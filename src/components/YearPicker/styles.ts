import { YearPickerInput } from 'mantine-dates-6';
import { defaultTransition } from '@/styles/theme';
import styled from '@emotion/styled';

const Container = styled(YearPickerInput)`
  position: relative;

  line-height: 1.55;

  label {
    margin-left: 0.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark[4]};
  }

  > div {
    > button {
      height: 48px;

      border-radius: 8px;
      border-color: ${({ theme }) => theme.colors.dark[0]};
      border-bottom: 2px solid ${({ theme }) => theme.colors.dark[2]};
      background-color: ${({ theme }) => theme.colors.gray[2]};
      transition: ${defaultTransition};

      line-height: 1.5;
      font-size: 1.125rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.dark[4]};

      > div {
        color: ${({ theme }) => theme.colors.dark[2]};
      }
    }
  }

  .mantine-Popover-dropdown {
    padding: 0;
    border-radius: 8px;
    width: 300px !important;
    box-shadow: ${({ theme }) => theme.shadows.md};
    left: 50% !important;
    transform: translateX(-50%);
    overflow: hidden;
    border: none;

    * {
      transition: ${defaultTransition};
    }

    .mantine-YearPickerInput-monthLevel,
    .mantine-YearPickerInput-decadeLevel,
    .mantine-YearPickerInput-yearLevel {
      width: 100%;

      .mantine-YearPickerInput-calendarHeader {
        padding: ${({ theme }) => theme.spacing.xs}px;
        margin: 0;

        background: ${({ theme }) =>
          theme.fn.linearGradient(
            45,
            theme.colors.green[9],
            theme.colors.green[8]
          )};

        button {
          font-size: ${({ theme }) => theme.fontSizes.lg}px;
          color: #fff;

          &:hover {
            background: ${({ theme }) => theme.colors.green[8]};
          }

          &:first-of-type,
          &:last-of-type {
            svg {
              width: 24px;
              height: 24px;
            }
          }
        }

        div {
          transition: ${defaultTransition};
          font-size: ${({ theme }) => theme.fontSizes.lg}px;
          color: #fff;
        }
      }

      table {
        width: 100%;
        border-collapse: separate;
        padding: ${({ theme }) => theme.spacing.xs}px;
        background-color: ${({ theme }) => theme.colors.gray[2]};
        border: 1px solid ${({ theme }) => theme.colors.dark[0]};
        border-radius: 8px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: none;

        thead {
          tr {
            th {
              font-weight: bold;
            }
          }
        }

        tbody {
          tr {
            td {
              button {
                font-weight: 500;
                color: ${({ theme }) => theme.colors.dark[4]};

                &:hover {
                  background-color: #fff;
                }

                &[data-selected] {
                  color: #fff;
                  background-color: ${({ theme }) => theme.colors.green[8]};

                  &:hover {
                    background-color: ${({ theme }) => theme.colors.green[9]};
                  }
                }

                &[data-outside] {
                  color: ${({ theme }) => theme.colors.gray[4]};

                  &:hover {
                    background-color: ${({ theme }) => theme.colors.gray[1]};
                  }
                }

                &[data-weekend] {
                  color: ${({ theme }) => theme.colors.red[6]};
                }
              }
            }
          }
        }
      }
    }
  }

  &:focus-within {
    > div {
      > button {
        border-color: ${({ theme }) => theme.colors.dark[0]};
        border-bottom-color: ${({ theme }) => theme.colors.green[8]};
      }
    }
  }
`;

export { Container };
